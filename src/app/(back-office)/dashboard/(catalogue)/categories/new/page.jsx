"use client";

import { FormHeader } from "@/components/backoffice";
import React from "react";
import { SubmitButton, TextInput } from "@/components/FormInputs"
import { useForm } from 'react-hook-form'
import TextareaInput from "@/components/FormInputs/TextArea";

export default function NewCategory() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  async function onSubmit(data) {
    console.log(data);
    
  }
  return (
    <div>
      <FormHeader title="New Category" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Category Title" name="title" register={register} errors={errors}/>
          <TextareaInput label="Description Category" name="description" register={register} errors={errors}/>
        </div>
        <SubmitButton isLoading={false} buttonTitle="Create Category" loadingButtonTitle="Create Category please wait..." />
      </form>
    </div>
  );
}
