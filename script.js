function formatarIP(input) {
  // Remove todos os caracteres não numéricos
  var numeros = input.replace(/\D/g, '');
     
  // Adiciona os pontos separadores
  var ipFormatado = numeros.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.');
  return ipFormatado;
}
function formatarInput() {
  var input = document.getElementById('ip-input').value;
  var ipFormatado = formatarIP(input);
  document.getElementById('ip-formatado').textContent = ipFormatado;
  console.log(ipFormatado)

  let array = ipFormatado.split(".", 4)
  console.log(array)

  if (array[0] >= 1 && array[0] <= 126)
  {
    var a = "IP classe A" + '<br/>' + '<br/>' +
    "Exemplo de IP:" + ipFormatado + "/8" + '<br/>' + '<br/>' +
    "Máscara padrão: 255.0.0.0" + '<br/>' + '<br/>' +
    "Máscara em Binário: 11111111.0000000.0000000.0000000" + '<br/>' +'<br/>' +
    "Função da Máscara: REDE.HOST.HOST.HOST" + '<br/>' + '<br/>' +
    "Quantidade de Redes: 126 Redes" + '<br/>' + '<br/>' +
    "Quantidade de Hosts por REDE: 16.777.214 Hosts" + '<br/>' + '<br/>' +
    "Rede: " + array[0] + ".0.0.0" + '<br/>' + '<br/>' +
    "Primeiro Host: " + array[0] + ".0.0.1" + '<br/>' + '<br/>' +
    "Último Host: " + array[0] + ".255.255.254" + '<br/>' + '<br/>' +
    "Broadcast: " + array[0] + ".255.255.255" 
    console.log(a)
    document.getElementById("mostrar").innerHTML = a
  }
  else{
    if (array[0] >= 128 && array[0] <= 191)
    {
      var b = "IP classe B" + '<br/>' + '<br/>' +
      "Exemplo de IP:" + ipFormatado + "/16" + '<br/>' + '<br/>' +
      "Máscara padrão: 255.255.0.0" + '<br/>' + '<br/>' +
      "Máscara em Binário: 11111111.11111111.0000000.0000000" + '<br/>' + '<br/>' +
      "Função da Máscara: REDE.REDE.HOST.HOST" + '<br/>' + '<br/>' +
      "Quantidade de Redes: 16.384 Redes" + '<br/>' + '<br/>' +
      "Quantidade de Hosts por REDE: 65.534 Hosts" + '<br/>' + '<br/>' +
      "Rede: " + array[0] + "." + array[1] + ".0.0" + '<br/>' + '<br/>' +
      "Primeiro Host: " + array[0] + "." + array[1] + ".0.1" + '<br/>' + '<br/>' +
      "Último Host: " + array[0] + "." + array[1] + ".255.254" + '<br/>' + '<br/>' +
      "Broadcast: " + array[0] + "." + array[1] + ".255.255" 
      document.getElementById("mostrar").innerHTML = b
    }
    else{
      if (array[0] >= 192 && array[0] <= 223)
      {
        var c = "IP classe C" + '<br/>' + '<br/>' +
        "Exemplo de IP:" + ipFormatado + "/24" + '<br/>' + '<br/>' +
        "Máscara padrão: 255.255.255.0" + '<br/>' + '<br/>' +
        "Máscara em Binário: 11111111.11111111.11111111.0000000" + '<br/>' + '<br/>' + 
        "Função da Máscara: REDE.REDE.REDE.HOST" + '<br/>' + '<br/>' +
        "Quantidade de Redes: 2.097.152 Redes" + '<br/>' + '<br/>' +
        "Quantidade de Hosts por REDE: 254 Hosts" + '<br/>' + '<br/>' +
        "Rede: " + array[0] + "." + array[1] + "." + array[2] + ".0" + '<br/>' + '<br/>' +
        "Primeiro Host: " + array[0] + "." + array[1] + "." + array[2] + ".1" + '<br/>' + '<br/>' +
        "Último Host: " + array[0] + "." + array[1] + "." + array[2] + ".254" + '<br/>' + '<br/>' +
        "Broadcast: " + array[0] + "." + array[1] + "." + array[2] + ".255" 

        document.getElementById("mostrar").innerHTML = c
      }
      else{
        if (array[0] == 127){
          var loop = "Reservado para Loopback"
          document.getElementById("mostrar").innerHTML = loop
        } else{
          if (array[0] >= 224 && array[0] <= 239) {
            var multi = "IP classe D" + '<br/>' + '<br/>' + "Reservado para tráfego Multicast"
            document.getElementById("mostrar").innerHTML = multi
          } else {
            if (array[0] >= 240 && array[0] <= 255) {
              var futuro = "IP classe E" + '<br/>' + '<br/>' + "Reservado uso futuro e testes"
              document.getElementById("mostrar").innerHTML = futuro
            } else{
              var nada = "IP não é válido"
              document.getElementById("mostrar").textContent = nada
            }
          }
        }
      }
    }
  }
}

