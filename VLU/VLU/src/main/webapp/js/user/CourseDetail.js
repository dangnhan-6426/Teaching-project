function buttonAddCourse(userID, courseID, urlServlet) {
    if (userID === "") {
        alert("Hãy Đăng Nhập Tài Khoản Của Bạn!");
    } else {
        $.ajax({
            url: urlServlet,
            type: "post",
            data: {
                UserID: userID,
                CourseID: courseID
            },
            success: function () {
                location.reload();
            }
        });
    }
}
 
