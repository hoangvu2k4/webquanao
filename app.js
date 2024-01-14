function checkForm(option) {
    var formElement = document.querySelector(option.form);

    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var checkAll = true;
            option.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var check = checkError(inputElement, rule);

                if (!check) {
                    checkAll = false;
                }

                var user = {
                    fullname: formElement.querySelector("#fullname").value,
                    email: formElement.querySelector("#email").value,
                    password: formElement.querySelector("#password").value,
                    phone: formElement.querySelector("#phone").value,
                    username: formElement.querySelector("#username").value,
                };

                var json = JSON.stringify(user);

                if (user.fullname && user.email && user.password && user.phone && user.username) {
                    localStorage.setItem(user.username, json);
                }
            });

            if (checkAll) {
                alert("Đăng ký thành công, chuyển tới trang đăng nhập.");
                window.location.href = "dangnhap.html";
            } else {
                alert("Đăng ký thất bại");
            }
        };

        option.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    checkError(inputElement, rule);
                };
            }
        });
    }
}

checkForm.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập tên đăng nhập';
        }
    };
};

checkForm.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng định dạng email';
        }
    };
};

checkForm.isPassword = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập mật khẩu trên ${min} ký tự`;
        }
    };
};

checkForm.isPhone = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            return phoneRegex.test(value) ? undefined : 'Vui lòng nhập số điện thoại đúng định dạng';
        }
    };
};

checkForm.isUsername = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var usernameRegex = /[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỗợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g;
            return usernameRegex.test(value) ? undefined : 'Vui lòng nhập đúng họ tên';
        }
    };
};
