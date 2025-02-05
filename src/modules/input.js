export function formatarNumero() {
  let input = document.getElementById('card-id');
  let valor = input.value.replace(/\D/g, ''); 
  let valorFormatado = valor.match(/.{1,3}/g)?.join('-') || '';
  input.value = valorFormatado;
}