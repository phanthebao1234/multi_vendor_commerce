"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
// import { SubmitButton, TextInput, TextareaInput, ImageInput } from "@/components/FormInputs"
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextArea";
import ImageInput from "@/components/FormInputs/ImageInput";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from 'react-hook-form'
import { makePostRequest } from "@/lib/apiRequest"

export default function NewSliders() {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const {register, reset, handleSubmit, formState:{errors}} = useForm()
  
  async function onSubmit(data) {
    {/*
      -description
      -image
      -url
    */}
    data.imageUrl = imageUrl
    console.log(data);
    makePostRequest(setLoading, "api/sliders", data, "Slider", reset)
  }
  return (
    <div>
      <FormHeader title="New Slider" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Slider Title" name="title" register={register} errors={errors}/>
          <TextareaInput label="Slider Description" name="description" register={register} errors={errors}/>
          <ImageInput label="Slider Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"/>
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Slider" loadingButtonTitle="Create Slider please wait..." />
      </form>
    </div>
  );
}
