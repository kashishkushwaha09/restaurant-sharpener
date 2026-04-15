import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import InputField from './UI/InputField';
import { ShoesContext } from '../context/shoes/ShoesContext';

const AddItem = () => {
    const [form, setForm] = useState({
        name: "", desc: "", price: "", large: "", medium: "", small: ""
    });
    const {addItems}=useContext(ShoesContext);
    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const isEmptyfield=(value)=>!value || value.trim().length===0;
    const handleSubmit=(e)=>{
        e.preventDefault();
        const values=Object.values(form);
        console.log(values);
        const hasEmpty=values.some(value=>isEmptyfield(value));
        if(hasEmpty){
            alert("Please fill all fields");
            return;
        }
        addItems(form);
        setForm({
        name: "", desc: "", price: "", large: "", medium: "", small: ""
    })
    }
    return (
        <div className="container">
            <h3 className="text-white mt-3">Add Shoes</h3>

            <Form onSubmit={handleSubmit}>

                <div className="row">
                    {/* name  */}
                    <div className="col">
                        <InputField
                            label="Shoe Name"
                            name="name"
                            value={form.name}
                            type='text'
                            placeholder="Enter shoe name"
                            onChange={handleChange} />
                    </div>
                    {/* desc  */}
                    <div className="col">
                        <InputField
                            label="Description"
                            name="desc"
                            value={form.desc}
                            type='text'
                            placeholder="Enter description"
                            onChange={handleChange} />

                    </div>
                    {/* price  */}
                    <div className='col'>
                        <InputField
                            label="Price"
                            name="price"
                            value={form.price}
                            type='number'
                            placeholder="Enter price"
                            onChange={handleChange} />
                    </div>

                </div>

                <div className="row">
                    {/* large  */}
                    <div className="col">
                        <InputField
                            label="Large"
                            name="large"
                            value={form.large}
                            type='number'
                            placeholder="Qty"
                            onChange={handleChange} />
                    </div>

                    <div className="col">
                        {/* medium  */}
                        <InputField
                            label="Medium"
                            name="medium"
                            value={form.medium}
                            type='number'
                            placeholder="Qty"
                            onChange={handleChange} />
                       
                    </div>

                    <div className="col">
                         {/* small  */}
                        <InputField
                            label="Small"
                            name="small"
                            value={form.small}
                            type='number'
                            placeholder="Qty"
                            onChange={handleChange} />
                      
                    </div>
                </div>

                {/* Submit */}
                <button className="btn btn-dark w-100 fw-semibold" type="submit">
                    Add Product
                </button>
            </Form>
        </div>
    )
}

export default AddItem