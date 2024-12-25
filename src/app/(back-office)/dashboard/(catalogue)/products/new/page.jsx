"use client";

import { FormHeader } from "@/components/backoffice";
import React, { useState } from "react";
// import { SubmitButton, TextInput, TextareaInput, ImageInput } from "@/components/FormInputs"
import TextareaInput from "@/components/FormInputs/TextArea";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";

export default function NewProduct() {
  const [imageUrl, setImageUrl] =
    useState("");
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
    {
      id: 4,
      title: "Category 4",
    },
    {
      id: 5,
      title: "Category 5",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer 1",
    },
    {
      id: 2,
      title: "Farmer 2",
    },
    {
      id: 3,
      title: "Farmer 3",
    },
    {
      id: 4,
      title: "Farmer 4",
    },
    {
      id: 5,
      title: "Farmer 5",
    },
  ];
  const [tags, setTags] = useState([
    "Tag 1",
    "Tag 2",
    "Tag 3",
  ]);
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
      -title 
      -marketIds
      -slug => auto()
      -description
      -image/images[]
      -sku
      -barCode
      -productPrice
      -salePrice
      -category
      -farmer
      -tags[]
    */
    }
    const slug = generateSlug(
      data.title
    );
    data.slug = slug;
    // data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/products",
      data,
      "Product",
      reset
    );
  }
  return (
    <div>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Bar Code"
            name="barCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Product Category"
            name="categoryId"
            options={categories}
            multiple={true}
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Product Farmer"
            name="farmerId"
            options={farmers}
            multiple={true}
            register={register}
            errors={errors}
            className="w-full"
          />
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            
          />
          <TextareaInput
            label="Description Product"
            name="description"
            register={register}
            errors={errors}
          />
          <ArrayItemInput
            setItems={setTags}
            items={tags}
            itemTitle={"Tag"}
          />
          <ImageInput
            label="Product Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Create Product please wait..."
        />
      </form>
    </div>
  );
}
