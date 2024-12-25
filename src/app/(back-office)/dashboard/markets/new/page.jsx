"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
import TextareaInput from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";

export default function NewMarket() {
  const [logoUrl, setLogoUrl] =
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
  console.log(isActive);

  async function onSubmit(data) {
    {
      /*
      -id => auto()
      -title,
      -slug,
      -description,
      -isActive,
      -logoUrl,
    */
    }
    const slug = generateSlug(
      data.title
    );
    console.log(slug);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/markets",
      data,
      "Market",
      reset
    );
  }
  return (
    <div>
      <FormHeader title="New Market" />
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Market Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
          <ImageInput
            label="Market Logo"
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUploader"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Market"
          loadingButtonTitle="Create Market please wait..."
        />
      </form>
    </div>
  );
}
