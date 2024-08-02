"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Car } from "../page";
import { useForm } from "react-hook-form";

type Props = {
  cars: Car[];
};
export default function CarForm({ cars }: Props) {
  const { handleSubmit, register } = useForm<{ carId: string }>();
  function submitHandler(data) {
    console.log(data.carId);
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <RadioGroup defaultValue="">
        {cars.map((car) => {
          return (
            car.status == "available" && (
              <RadioGroupItem
                key={car.id}
                value={car.id}
                id={car.id}
                {...register("carId")}
              />
            )
          );
        })}

        <Button type="submit">¡BUY!</Button>
      </RadioGroup>
    </form>
  );
}

{
  /* <Label htmlFor="option-two">{car.status}</Label> */
}
