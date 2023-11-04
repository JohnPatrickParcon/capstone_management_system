"use client"

import { useState, useMemo } from "react";
import {Card, CardBody, Input, Button} from "@nextui-org/react";
import { EyeFilledIcon } from '../ClientComponent/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../ClientComponent/EyeSlashFilledIcon';
import { serverLogin } from "../api/serverLogin";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //for eye icon on password input
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  //email validation
  const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const loginHandler = () => {
    serverLogin({email: email, password: password});
  }

  return (
    <form onSubmit={loginHandler} action="/" className='grid place-items-center mt-8'>  
      <Card className='w-fit h-fit mx-4 md:w-5/12'>
        <CardBody className='flex flex-row flex-wrap gap-4'>
          <h1>Login</h1>
          <Input
            isRequired
            isClearable
            isInvalid={isInvalid}
            type="email"
            label="Email"
            variant='faded'
            placeholder="johndoe@gmail.com"
            color={isInvalid ? "danger" : "default"}
            errorMessage={isInvalid && "Please enter a valid email"}
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
          
          <Button type="submit" radius="full" className="w-full bg-purple-600">Login</Button>
        </CardBody>
      </Card>
    </form>
  )
}

export default login