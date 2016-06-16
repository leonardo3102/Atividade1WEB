/*
Primeiro arquivo javascript/jquery
*/

/*
window.onload = function() {

	alert("Seja bem-vindo(a) !");

}
*/
// Também é possível escrever como $ function () {} a linha abaixo.

$(document).ready(function() {
    console.log("Documento pronto!");

    $("a").click(function() {
        alert("Clique no link!");
    }); // Ao clicar em algum lin, é exibindo esse alerta

    $("button[name='Mudar']").click(function() {
        $("button[name='acessar']").addClass("btn btn-primary");
    }); //Ao clicar no botão mudar, o botão Acessar recebe o css btn-primary

    $("#conteudo").click(function() {
        $("#conteudo").append("<h5>Clicou! </h5>");

    }); //# associa ao id

    $("#calcular").click(function() {
        // alert( $("#valor1").val());
        $("#res").val(parseInt($("#valor1").val()) + parseInt($("#valor2").val()));
    });

    $("button[name='lnk']").click(function() {
        alert($("#links").html());
    });

    $("#acesso").validate({
        rules: {
            nome: {
                required: true,
                minlength: 10
            },
            endereco: {
                required: true,
                minlength: 10
            },
            cidades: {
                required: true,
                notEqual: "0"
            },

            uf: {
                required: true,
                notEqual: "0"
            },
            cpf: {
                required: true,
                cpf: true
            },
            user: {
                required: true,
                minlength: 6
            },
            email1: {
                required: true,
                email: true,
            },
            cemail: {
                required: true,
                email: true,
                equalTo: "#email1"
            },
            senha: {
                required: true,
                passowrd: true
            },
            rsenha: {
                required: true,
                passowrd: true,
                equalTo: "#senha"
            },
            sexo: {
                required: true
            },
            area: {
                required: true,
            }

        },


        messages: {
            nome: {
                required: "Informe o nome corretamente.",
            },
            cemail: {
                equalTo: "Informe o mesmo e-mail do campo acima",
            },
            rsenha: {
                equalTo: "Repita a senha acima"
            },
            area: {
                required: "Seleciona pelo menos uma área",
            }


        },
        // Comandos abaixo necessários para funcionar com o bootstrap.
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },

        submitHandler: function(form) {
            form.submit();
        }

    });

    jQuery.extend(jQuery.validator.messages, {
        required: "Campo obrigatório.",
        remote: "Please fix this field.",
        email: "Digite um e-mail válido.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Por favor, repita os valores.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Digite pelo menos {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });

    jQuery.validator.addMethod("cpf", function(value, element) {
        value = jQuery.trim(value);

        value = value.replace('.', '');
        value = value.replace('.', '');
        cpf = value.replace('-', '');
        while (cpf.length < 11) cpf = "0" + cpf;
        var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
        var a = [];
        var b = new Number;
        var c = 11;
        for (i = 0; i < 11; i++) {
            a[i] = cpf.charAt(i);
            if (i < 9) b += (a[i] * --c);
        }
        if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11 - x }
        b = 0;
        c = 11;
        for (y = 0; y < 10; y++) b += (a[y] * c--);
        if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11 - x; }

        var retorno = true;
        if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) retorno = false;

        return this.optional(element) || retorno;

    }, "Informe um CPF válido");

    jQuery.validator.addMethod("notEqual", function(value, element, param) {
        return this.optional(element) || value != param;
    }, "Por favor, especifique um valor diferente");


});

