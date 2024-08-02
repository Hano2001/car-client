"use client";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Car } from "../page";
import { useForm } from "react-hook-form";
import { sendPayments } from "@/actions";
import Image from "next/image";
import { Label } from "@/components/ui/label";

type Props = {
  cars: Car[];
};

export default function CarForm({ cars }: Props) {
  const { handleSubmit, register } = useForm<{ carId: string }>();
  function submitHandler(data: any) {
    sendPayments(data.carId);
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="">
      <RadioGroup defaultValue="">
        {cars.map((car) => {
          return (
            car.status == "available" && (
              <div key={car.id} className="flex flex-row items-center gap-8">
                <RadioGroupItem
                  value={car.id}
                  id={car.id}
                  {...register("carId")}
                />
                <Image
                  src={"/bmw-medium.jpg"}
                  width={180}
                  height={180}
                  alt="BMW car"
                />
                <Label htmlFor="option-two" className="text-lg">
                  BMW
                </Label>
              </div>
            )
          );
        })}
      </RadioGroup>
      <Button type="submit" className="mt-4">
        ¡BUY!
      </Button>
    </form>
  );
}
