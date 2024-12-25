"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
// import { SubmitButton, TextInput, TextareaInput, ImageInput } from "@/components/FormInputs"
import TextareaInput from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput"
import SelectInput from "@/components/FormInputs/SelectInput"
import ToggleInput from "@/components/FormInputs/ToggleInput"
import { useForm } from 'react-hook-form'
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest"

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const markets = [
    {
      id: 1,
      title: "Sprouter Farmers Market"
    },
    {
      id: 2,
      title: "Cabbage Farmers Market"
    },
    {
      id: 3,
      title: "Carrot Farmers Market"
    },
    {
      id: 4,
      title: "Brocolli Farmers Market"
    },
    {
      id: 5,
      title: "Vie Farmers Market"
    },
  ]
  const [loading, setLoading] = useState(false)
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      isActive: true,
    },
  })
  const isActive = watch("isActive")
  async function onSubmit(data) {
    {/*
      -id => auto()
      -title 
      -marketIds
      -slug => auto()
      -description
      -imageUrl  
    */}
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data);
    makePostRequest(setLoading, "api/categories", data, "Category", reset)
  }
  return (
    <div>
      <FormHeader title="New Category" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Category Title" name="title" register={register} errors={errors} className="w-full"/>
          <SelectInput label="Category Market" name="marketIds" options={markets} multiple={true} register={register} errors={errors} className="w-full"/>
          <TextareaInput label="Description Category" name="description" register={register} errors={errors}/>
          <ImageInput label="Category Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"/>
          <ToggleInput
            label="Publish your Category"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Category" loadingButtonTitle="Create Category please wait..." />
      </form>
    </div>
  );
}
