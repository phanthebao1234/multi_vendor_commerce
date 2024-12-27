"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
import TextareaInput from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import QuillEditor from "@/components/FormInputs/QuillEditor"
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";


export default function NewTraining() {
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    { id: 1, title: "Sprouter Farmers Market" },
    { id: 2, title: "Cabbage Farmers Market" },
    { id: 3, title: "Carrot Farmers Market" },
    { id: 4, title: "Brocolli Farmers Market" },
    { id: 5, title: "Vie Farmers Market" },
  ];

  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    makePostRequest(setLoading, "api/community", data, "Community", reset);
  }

  return (
    <div>
      <FormHeader title="New Training" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Training Market"
            name="categoryId"
            options={categories}
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Description Training"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Training Thumbnail"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="thumbnailTrainingUploader"
          />
          <QuillEditor label="Training Content" value={content} onChange={setContent}/>
          <ToggleInput
            label="Publish your Training"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Training"
          loadingButtonTitle="Create Training please wait..."
        />
      </form>
    </div>
  );
}
