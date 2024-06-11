function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');

   function onClick() {
      for (let row of rows) {
         row.classList.remove('select');

         if (row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
   }

   input.addEventListener('input', function(event) {
      //console.log('Current value:', event.target.value);
      //console.log('Current value:', input.value.length); 
      
      for (let row of rows) {
         row.classList.remove('select');

         if (row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }

      if(input.value.length == 0){
         for (let row of rows) {
            row.classList.remove('select');
         } 
      }
  });
}