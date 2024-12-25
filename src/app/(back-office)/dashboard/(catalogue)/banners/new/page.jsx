"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
// import { SubmitButton, TextInput, TextareaInput, ImageInput } from "@/components/FormInputs"
import SubmitButton from "@/components/FormInputs/SubmitButton";
import ImageInput from "@/components/FormInputs/ImageInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";

export default function NewBanners() {
  const [imageUrl, setImageUrl] =
    useState("");
  const [loading, setLoading] =
    useState(false);
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
    {
      /*
      -title
      -link
      -imageUrl
      -published
    */
    }
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/banners",
      data,
      "Banner",
      reset
    );
  }
  return (
    <div>
      <FormHeader title="New Banner" />
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Banner Link"
            name="link"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Banner Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />
          <ToggleInput
            label="Publish your Banner"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Banner"
          loadingButtonTitle="Create Banner please wait..."
        />
      </form>
    </div>
  );
}
