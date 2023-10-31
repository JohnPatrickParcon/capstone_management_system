"use client"

import { useState, useMemo } from "react";
import {Card, CardBody, Input, Button} from "@nextui-org/react";
import { EyeFilledIcon } from '../ClientComponent/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../ClientComponent/EyeSlashFilledIcon';

function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasssword] = useState("");

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
  }, [confirmPassword]);

  return (
    <form className='grid place-items-center mt-8'>
      <Card className='w-fit h-fit mx-4 md:w-5/12'>
        <CardBody className='flex flex-row flex-wrap gap-4'>
          <h1>Login</h1>
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
            endContent={ <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />                
              )}
              </button>}
          />

          <Button radius="full" className="w-full bg-purple-600">Sign Up</Button>
        </CardBody>
      </Card>
    </form>
  )
}

export default signup