document.addEventListener('DOMContentLoaded', function() {
    const cvForm = document.getElementById('cvForm');
    const outputDiv = document.getElementById('output');

    cvForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Lấy giá trị từ các trường input và textarea
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const description = document.getElementById('description').value;

        // Hiển thị thông tin trên trang
        const cvInfo = `
            <h2>Thông tin CV</h2>
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Địa chỉ:</strong> ${address}</p>
            <p><strong>Số điện thoại:</strong> ${phone}</p>
            <p><strong>Mô tả công việc:</strong> ${description}</p>
        `;

        outputDiv.innerHTML = cvInfo;
    });
});
