
import React, { useEffect } from 'react'
import check_logo from "../../assets/imagesource/check_logo.png";
import stripe_logo from "../../assets/imagesource/stripe_logo.png";


import { Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  useEffect(()=>{
navigate("/checkout")
  },[])
  return (
    <div className='pb-[50px]'>
        <div className='bg-[#00806a] rounded-[30px] px-[30px] lg:px-[70px] pt-[60] pb-[150px]'>
           <div className='mb-14'>
              <img src={check_logo} alt='check_logo' className="w-[100px]" />
           </div>
           <div className='lg:w-10/12 mx-auto text-center'>
              <h2 className='text-white text-[30px] lg:text-[40px] leading-[50px] font-semibold mb-4'>Company Name</h2>
              <p className='text-white text-[16px] leading-[26px] font-normal mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "</p>
           </div>
        </div>
        <div className='bg-[#ffffff] rounded-[30px] px-[30px] lg:px-[70px] pt-[30px] lg:pt-[60] pb-[60px] flex gap-8 lg:w-10/12 mx-auto mt-[-100px]'>
            <div className='lg:w-8/12 mx-auto form_area'>
              <div className='mb-4'>
                <div className="mb-1 block">
                <Label htmlFor="base">Email Address*</Label>
                </div>
                <TextInput id="base" type="email" sizing="md" />
              </div>
              <div className='flex gap-4 mb-4'>
                 <div className='w-6/12'>
                    <div>
                        <div className="mb-1 block">
                        <Label htmlFor="base">First Name*</Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </div>
                 </div>
                 <div className='w-6/12'>
                    <div>
                        <div className="mb-1 block">
                        <Label htmlFor="base">Last Name*</Label>
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </div>
                 </div>
              </div>
              <div className='mb-4'>
                <div className="mb-1 block">
                <Label htmlFor="base">Select Country*</Label>
                </div>
                <Select id="countries" required>
                    <option>Select Country</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
              </div>
              <div className='flex gap-4 mb-4'>
                 <div className='w-6/12'>
                    <div>
                        <div className="mb-1 block">
                        <Label htmlFor="base">Select State*</Label>
                        </div>
                        <Select id="state" required>
                            <option>Select State</option>
                            <option>State</option>
                            <option>State</option>
                            <option>State</option>
                        </Select>
                    </div>
                 </div>
                 <div className='w-6/12'>
                    <div>
                        <div className="mb-1 block">
                        <Label htmlFor="base">Select City*</Label>
                        </div>
                        <Select id="state" required>
                            <option>Select City</option>
                            <option>City</option>
                            <option>City</option>
                            <option>City</option>
                        </Select>
                    </div>
                 </div>
              </div>
              <div className='mb-4'>
                <div className="mb-2 block">
                  <Label htmlFor="base">Select Payment Type</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="stripe" />
                    <img src={stripe_logo} alt='stripe_logo' className="w-[60px]" />
                </div>
              </div>
              <button className="w-full bg-[#00806a] text-white font-semibold py-3 rounded-full hover:bg-[#006b57] transition">Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default Login