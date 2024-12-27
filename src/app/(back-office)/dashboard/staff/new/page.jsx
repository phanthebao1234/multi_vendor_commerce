"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
import TextareaInput from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useForm } from "react-hook-form";
import { generateCode } from "@/lib/generateCode";
import { makePostRequest } from "@/lib/apiRequest";

export default function NewStaff() {
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
  console.log(isActive);

  async function onSubmit(data) {
    {
      /*
      -id => auto()
      -name 
      -phone
      -code
      -email
      -physicalAddress,
      -contactPerson,
      -contactPersonPhone,
      -terms,
      -notes,
      -isActive,
      -imageUrl
    */
    }
    const code = generateCode(
      "LFF",
      data.name
    );
    console.log(code);
    data.code = code;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/staff",
      data,
      "Staff",
      reset
    );
  }
  return (
    <div>
      <FormHeader title="New Staff" />
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff's Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Staff Email Address"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
            type="email"
          />
          <TextInput
            label="Staff's Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
            type="tell"
          />
          
          <TextInput
            label="Staff's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff's Contact Person Phone"
            name="contactPersonPhone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Staff's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <ToggleInput
            label="Staff Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
          <ImageInput
            label="Staff Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="farmerImageUploader"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Retype Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Staff"
          loadingButtonTitle="Create Staff please wait..."
        />
      </form>
    </div>
  );
}
