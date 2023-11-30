"use client"

import { useState, useMemo } from "react";
import {Card, CardBody, Input, Button, RadioGroup, Radio} from "@nextui-org/react";
import { EyeFilledIcon } from '../ClientComponent/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../ClientComponent/EyeSlashFilledIcon';
import { signup } from "../ServerActions/auth";

function page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasssword] = useState("");
  const [userType, setUserType] = useState("");

  //for eye icon on password input
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  //email validation
  const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true
  }, [email]);

  const isConfirmPasswordInvalid = useMemo(() => {
    if (confirmPassword === "") return false;

    return confirmPassword == password ? false : true
  }, [password, confirmPassword]);

  const isNameInvalid = useMemo(() => {

    return name != "" ? false : true
  }, [name]);

  const signupHandler = () => {
    signup({email: email, name: name, password: password, userType: userType});
  }

  return (
    <form onSubmit={signupHandler} action="/" className='grid place-items-center mt-8'>
      <Card className='w-fit h-fit mx-4 md:w-5/12'>
        <CardBody className='flex flex-row flex-wrap gap-4'>
          <h1>Sign Up</h1>

          <Input
            isRequired
            isClearable
            isInvalid={isEmailInvalid}
            type="email"
            label="Email"
            variant='faded'
            placeholder="johndoe@gmail.com"
            color={isEmailInvalid ? "danger" : "default"}
            errorMessage={isEmailInvalid && "Please enter a valid email"}
            className="w-full"
            value={email}
            onValueChange={setEmail}
          />

          <Input
            isRequired
            isClearable
            type="text"
            label="Name"
            variant="faded"
            placeholder="John Doe"
            color={isNameInvalid ? "danger" : "default"}
            errorMessage={isNameInvalid && "Please enter name"}
            className="w-full"
            value={name}
            onValueChange={setName}
          />

          <Input
            isRequired
            type={isVisible ? "text" : "password"}
            label="Password"
            variant='faded'
            color='default'
            placeholder="password"
            className="w-full"
            value={password}
            onValueChange={setPassword}
            endContent={ <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />                
              )}
              </button>}
          />

          <Input
            isRequired
            type={isVisible ? "text" : "password"}
            label="Confirm Password"
            variant='faded'
            placeholder="confirm password"
            color={isConfirmPasswordInvalid ? "danger" : "default"}
            errorMessage={isConfirmPasswordInvalid && "Password does not match"}
            className="w-full"
            value={confirmPassword}
            onValueChange={setConfirmPasssword}
          />

          <RadioGroup
            className="flex flex-row gap-4"
            isRequired
            orientation="horizontal"
            label="Are you a"
            value={userType}
            onValueChange={setUserType}
            color="secondary">
              <Radio value="faculty">Faculty</Radio>
              <Radio value="student">Student</Radio>
          </RadioGroup>

          <Button type="submit" radius="full" className="w-full bg-purple-600">Sign Up</Button>
        </CardBody>
      </Card>
    </form>
  )
}

export default page