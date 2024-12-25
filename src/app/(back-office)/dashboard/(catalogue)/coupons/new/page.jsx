"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
// import { SubmitButton, TextInput, TextareaInput, ImageInput } from "@/components/FormInputs"
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from 'react-hook-form'
import { generateCouponCode } from "@/lib/generateCouponCode";
import { makePostRequest } from "@/lib/apiRequest"
import ToggleInput from "@/components/FormInputs/ToggleInput"

export default function NewCoupon() {
  const [loading, setLoading] = useState(false)
  // const [coupon, setCoupon] = useState("")
  const {register, reset, handleSubmit, formState:{errors}} = useForm({
    defaultValues: {
      isActive: true,
    },
  })
  
  const isActive = watch("isActive")
  
  async function onSubmit(data) {
    {/*
      -id => auto()
      -title 
      -code => auto()
      -expiryDate
    */}
    const couponCode = generateCouponCode(data.title, data.expiryDate)
    console.log(couponCode);
    data.couponCode = couponCode
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset)
  }
  return (
    <div>
      <FormHeader title="New Coupon" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Coupon Title" name="title" register={register} errors={errors}/>
          <TextInput label="Coupon Expiry Date" name="expiryDate" register={register} errors={errors} className="w-full" type="date" />
          <ToggleInput
            label="Publish your Coupon"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton isLoading={loading} buttonTitle="Create Coupon" loadingButtonTitle="Create Coupon please wait..." />
      </form>
    </div>
  );
}
