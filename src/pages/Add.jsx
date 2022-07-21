import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { toast } from 'react-toastify';
import add from '../sass/add.css'
import axios from 'axios';
import { Formik } from 'formik';
import { addInfoAction } from '../redux/saga/actions/InfoAction';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();

    return (
        <div className="MainDash">
      <h1 style={{margin: '40px'}}>Thêm sản phẩm</h1>
      <Formik
       initialValues={{ title: '', price: '', image01: '', image02: '', categorySlug: '', slug: '', description: '' }}
       validate={values => {
         const errors = {};
         if (!values.title) {
           errors.title = 'Tên sản phẩm không được để trống';
         }
         if (!values.price) {
          errors.price = 'Tên sản phẩm không được để trống';
         }
         if (!values.image01) {
          errors.image01 = 'Hình ảnh sản phẩm 1 không được để trống';
         }
         if (!values.image02) {
          errors.image02 = 'Hình ảnh sản phẩm 2 không được để trống';
         }
         if (!values.categorySlug) {
          errors.categorySlug = 'Cartegory Slug không được để trống';
         }
         if (!values.slug) {
            errors.slug = 'Slug không được để trống';
        }
        if (!values.description) {
            errors.description = 'Mô tả sản phẩm không được để trống';
        }
         return errors;
       }}
       onSubmit={async (values, { setSubmitting }) => {
        const {title, price, image01, image02, categorySlug, slug, description} = values;
        const data = {
          title: title,
          price: price,
          image01: image01,
          image02: image02,
          categorySlug: categorySlug,
          slug: slug,
          description: description,
          colors: ["white", "red", "orange"],
          size: ["s", "m", "l", "xl"],
        //   id: '1'
        };
          dispatch(addInfoAction(data))
          navigate.push('/');
        // toast.success("User added successfully!!");
        }
      }
      >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
          <form style={{width: "100%", margin: 'auto'}} onSubmit={handleSubmit}>
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Tên sản phẩm"
              name='title'
              variant="outlined"
              placeholder={"Tên sản phẩm"}
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.title && touched.title && errors.title}
              helperText={errors.title && touched.title && errors.title}
            />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Giá sản phẩm"
              name='price'
              variant="outlined"
              placeholder={"Giá sản phẩm"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              error={errors.price && touched.price && errors.price}
              helperText={errors.price && touched.price && errors.price}
            />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              name='image01'
              label="Hình ảnh sản phẩm 1"
              variant="outlined"
              placeholder={"Hình ảnh sản phẩm 1"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image01}
              error={errors.image01 && touched.image01 && errors.image01}
              helperText={errors.image01 && touched.image01 && errors.image01}
            />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Hình ảnh sản phẩm 2"
              variant="outlined"
              name='image02'
              value={values.image02}
              placeholder={"Hình ảnh sản phẩm 2"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.image02 && touched.image02 && errors.image02}
              helperText={errors.image02 && touched.image02 && errors.image02}
            />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Slug"
              variant="outlined"
              name='slug'
              value={values.slug}
              placeholder={"Slug"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.slug && touched.slug && errors.slug}
              helperText={errors.slug && touched.slug && errors.slug}
            />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Category Slug"
              variant="outlined"
              name='categorySlug'
              value={values.categorySlug}
              placeholder={"Category Slug"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.categorySlug && touched.categorySlug && errors.categorySlug}
              helperText={errors.categorySlug && touched.categorySlug && errors.categorySlug}
            />
            <TextField
              style={{ width: "600px", margin: "5px" }}
              type="text"
              label="Mô tả sản phẩm"
              variant="outlined"
              name='description'
              value={values.description}
              placeholder={"Mô tả sản phẩm"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.description && touched.description && errors.description}
              helperText={errors.description && touched.description && errors.description}
            />
              <Button style={{position: 'absolute', top: "90px", right: "150px"}} variant="contained" onClick={() => navigate("/userManagement")}>Go back</Button>
              <div style={{justifyContent: 'space-around', display: 'flex', marginTop: 0}}>
              <Button variant="contained" 
                type='submit'
                color="success"
                style={{width: '180px', height: '50px', fontSize: "18px"}}
              >
                Thêm
              </Button>
              </div>
          </form>
        )}
      </Formik>
    </div>
    )
}

export default AddProduct
