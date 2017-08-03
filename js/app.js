/**
 * Created by Jacek on 2015-12-16.
 */
 var lis = document.querySelectorAll('li');
 var prevButton = document.getElementById('prevPicture');
 var nextButton = document.getElementById('nextPicture');
 var imgPos = 0;
 lis[0].classList.add('visible');

 lis[imgPos].style.display = "inline-block";

 nextButton.addEventListener('click', showNextImg);
 prevButton.addEventListener('click', prevNextImg);

 function showNextImg() {
   imgPos++;
   if(imgPos >= lis.length-1){
     imgPos = lis.length-1;
   }
     lis[imgPos-1].style.display = "none";
     lis[imgPos].style.display = "inline-block";
 }

 function prevNextImg() {
   imgPos--;
   if(imgPos <= 0){
     imgPos = 0;
   }
     lis[imgPos+1].style.display = "none";
     lis[imgPos].style.display = "inline-block";
 }

 document.body.myData = {
   name: 'Петр',
   familyName: 'Петрович'
 };

 alert( document.body.myData.name );
