function checkForm(option){
    var formElement = document.querySelector(option.form);
    if(formElement){
        formElement.onsubmit = function(e){
            e.preventDefault();
            option.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selecter);
                checkError(inputElement, rule);
            })
            function checkInput(){
                var fullname = document.querySelector("#fullname").value;
                var password = document.querySelector("#password").value;
                var username = document.querySelector("#username").value;
                var fullnameInput = document.querySelector("#fullname");
                var passwordInput = document.querySelector("#password");
                var usernameInput = document.querySelector("#username");
                var user = localStorage.getItem(username)
                var data = JSON.parse(user)
                if(fullname!=data.fullname){
                    alert("Tên đăng nhập không chính xác")
                    fullnameInput.classList.add("error")
                    return false
                }
                if(password!=data.password){
                    alert("Mật khẩu không chính xác")
                    passwordInput.classList.add("error")
                    return false
                }
                if(username!=data.username){
                    alert("Họ tên không chính xác")
                    usernameInput.classList.add("error")
                    return false
                }
                if(fullname==data.fullname && password==data.password && username==data.username){
                    alert("Đăng nhập thành công")
                    window.location.href = "../html/index.html"
                }
            }
            checkInput()
        }
        
        function checkError(inputElement, rule){
            var errorMessage= rule.test(inputElement.value);
            var messageElement = inputElement.parentElement.querySelector(".message");
            if(errorMessage){
                messageElement.innerText = errorMessage;
                inputElement.classList.add('error');
            }
            else{
                messageElement.innerText = '';
                inputElement.classList.remove('error');
            }
        }
        option.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selecter)
            if(inputElement){
                inputElement.onblur = function(){
                    var errorMessage= rule.test(inputElement.value);
                    var messageElement = inputElement.parentElement.querySelector(".message");
                    checkError(inputElement, rule);
                }
            }
        })
    }
}

checkForm.isResquired = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập tên đăng nhập';
        }
    }
}
checkForm.isPassword = function(selecter, min){
    return {
        selecter: selecter,
        test: function(value){
            return value.length >= min ? undefined : `Vui lòng nhập mật khẩu trên ${min} ký tự`;
        }
    }
}
checkForm.isUsername = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            var userName = /[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g;
            return userName.test(value)? undefined : 'Vui lòng nhập đúng họ tên';
        }
    }
}