import React, { useState } from "react";
import Alert from "../component/Alert";
import {
  Button,
  TimePicker,
  Form,
  Input,
  DatePicker,
  ConfigProvider,
  Select,
} from "antd";
import dayjs from "dayjs";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

const submitAPI = function (formData) {
  return true;
};

function Reserve() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const onFinish = (values) => {
    const success = submitAPI({
      ...values,
      date: selectedDate ? selectedDate.format("YYYY-MM-DD") : null,
      time: selectedTime ? selectedTime.format("HH:mm") : null,
    });
    console.log("Submission Success:", success);
    Alert(
      "success",
      "Your Reservation has been set",
      "We will inform you through email for payment information"
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    Alert();
  };

  const onDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    const times = fetchAPI(new Date(date));
    setAvailableTimes(times);
  };

  const onTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <header
      id="populardish"
      className="flex flex-col gap-8 pt-20 px-8 lg:px-36 md:px-24 items-center justify-center"
    >
      <div className="flex flex-col w-full gap-2">
        <h1
          className="text-3xl font-bold text-center"
          onClick={() => console.log("SelectedDate", selectedDate)}
        >
          Dine With Us
        </h1>
        <p
          className="text-sm lg:text-md text-center"
          onClick={() => console.log("selectedTime", selectedTime)}
        >
          Reserve your table and look forward to a delightful dining experience
          at Little Lemon.
        </p>
      </div>
      <div className="border w-fit items-center justify-center pr-12 pt-10 px-6 shadow-lg">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email address!",
              },
            ]}
          >
            <Input placeholder="Input email address" />
          </Form.Item>

          <Form.Item
            label="Guests"
            name="guest_count"
            rules={[
              {
                required: true,
                message: "Please select number of guests!",
              },
            ]}
          >
            <Select placeholder="Select number of guests">
              {[...Array(6)].map((_, i) => (
                <Select.Option key={i + 1} value={i + 1}>
                  {i + 1}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please select a date!",
              },
            ]}
          >
            <DatePicker onChange={onDateChange} className="w-full" />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please select a time!",
              },
            ]}
          >
            <TimePicker
              className="w-full"
              onChange={onTimeChange}
              defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              disabled={!selectedDate}
              format="HH:mm"
              minuteStep={30}
              showNow={false}
              disabledTime={() => ({
                disabledHours: () => {
                  const availableHours = availableTimes.map((time) =>
                    parseInt(time.split(":")[0])
                  );
                  return Array.from({ length: 24 }, (_, i) => i).filter(
                    (hour) => !availableHours.includes(hour)
                  );
                },
                disabledMinutes: (selectedHour) => {
                  const availableMinutes = availableTimes
                    .filter(
                      (time) => parseInt(time.split(":")[0]) === selectedHour
                    )
                    .map((time) => parseInt(time.split(":")[1]));
                  return [0, 30].filter(
                    (minute) => !availableMinutes.includes(minute)
                  );
                },
              })}
            />
          </Form.Item>

          <Form.Item className="w-full flex items-center justify-center">
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: "#F4CE14",
                    colorPrimaryHover: "#F4DA5C",
                    colorPrimaryActive: "#D9B60A",
                    primaryColor: "#495E57",
                  },
                },
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="!rounded-none !font-bold hover:!text-[#495E57]"
              >
                Reserve Now
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
    </header>
  );
}

export default Reserve;
