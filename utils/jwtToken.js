export const sendToken = (user, statusCode, res, message) => {
  // Tạo token từ user (sử dụng phương thức getJWTToken() được định nghĩa trong user model)
  const token = user.getJWTToken();

  // Tùy chọn cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Thời gian hết hạn cookie
    ),
    httpOnly: true, // Cookie chỉ có thể được truy cập qua HTTP, không thể truy cập từ JS
    secure: true,    // Chỉ gửi cookie qua HTTPS
    sameSite: "None", // Cho phép cookie được gửi trong cross-site requests
  };

  // Gửi token qua cookie và trả về response
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};




// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   // const token = localStorage.getItem("token"); // Ví dụ
//   // if (typeof window !== "undefined") {
//   //   localStorage.setItem("key", "value");
//   // }
//   // useEffect(() => {
//   //   localStorage.setItem("key", "value");
//   // }, []);
//   // if (typeof window !== "undefined") {
//   //   localStorage.setItem("token", data.token); // Lưu token
//   // }

//   useEffect(() => {
//     if (isAuthorized && typeof window !== "undefined") {
//         const token = localStorage.getItem("token");
//         console.log("Token loaded:", token);
//     }
//   }, [isAuthorized]);

//   console.log(data);


//   const options = {
//     expires: new Date(
//       Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//     secure: true, 
//     sameSite: "None",  
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };
