import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddMenu = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_image_upload_token
  }`;

  const onSubmit = (data) => {
    const imageFile = data.image[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    fetch(imageUploadUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageUrl = imgRes.data.display_url;
          const { recipeName, category, price, recipeDetails } = data;
          const newItem = {
            name: recipeName,
            category,
            price: parseFloat(price),
            recipe: recipeDetails,
            image: imageUrl,
          };
          axiosSecure
            .post("/menu", newItem)
            .then((res) => {
              if (res.data.insertedId) {
                console.log("data inserted successfully");
                reset();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  //   console.log(errors);

  return (
    <div className="my-12">
      <SectionTitle
        subHeading="What's New"
        heading="Add an item"
      ></SectionTitle>

      <form className="mx-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("recipeName", { required: true, maxLength: 120 })}
            className="input input-bordered w-full  "
          />
        </div>

        <div className="flex gap-4">
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              {...register("category", { required: true, maxLength: 120 })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>pizza</option>
              <option>salad</option>
              <option>drinks</option>
              <option>dessert</option>
              <option>soup</option>
              <option>desi</option>
            </select>
          </div>

          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full  "
            />
          </div>
        </div>
        <div className="form-control w-full  ">
          <label className="label">
            <span className="label-text font-semibold">Price</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipeDetails", { required: true })}
          ></textarea>
        </div>
        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered w-full my-4 "
        />
        <button className="btn btn-outline btn-sm my-4">Add Item</button>
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Recipe Name"
          {...register("recipeName", { required: true, maxLength: 120 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
        />
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
        />

        <input type="submit" />
      </form> */}
    </div>
  );
};

export default AddMenu;
