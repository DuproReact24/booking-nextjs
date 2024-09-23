import React from "react";

async function getListRoom() {
  try {
    const res = await fetch(
      "https://airbnbnew.cybersoft.edu.vn/api/phong-thue",
      {
        next: {
          revalidate: 0,
        },
        headers: {
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzM0UiLCJIZXRIYW5TdHJpbmciOiIyNi8wNC8yMDMwIiwiSGV0SGFuVGltZSI6IjE5ODI0NjcyMDAwMDAiLCJuYmYiOjE2NTQzNjIwMDAsImV4cCI6MTY4MjYxNDgwMH0.s9BOF-qYbTo_RUlm6U1wBMyxJHGZvOn3dbYBi9UoTDU",
        },
      }
    );

    const newRes = await res.json();
    return newRes;
  } catch (error) {}
}
const ListRoom = async () => {
  const dataListRoom = await getListRoom();
  const renderListCardRoom = (item) => {
    return (
      <div className="border rounded p-3 shadow space-y-5" key={item.id}>
        <div className="h-48 w-full border rounded">
          <img
            src={item.hinhAnh}
            alt="hi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          {" "}
          <p className="font-semibold text-sm">{item.tenPhong}</p>
          <p className="font-semibold text-sm">{item.giaTien}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {dataListRoom.content.map((item) => {
          return renderListCardRoom(item);
        })}
      </div>
    </div>
  );
};

export default ListRoom;
