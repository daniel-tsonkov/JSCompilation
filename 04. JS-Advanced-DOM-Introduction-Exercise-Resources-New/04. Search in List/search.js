function search() {
   let listElements = document.querySelectorAll('ul#towns li');
   let searchText = document.getElementById('searchText').value;
   let maches;

   for (const element of listElements) {
      let text = element.textContent;
      
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';

      if (text.match(searchText)) {
         maches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
}
