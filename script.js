let padcast=document.getElementById("padcast")
let zir=document.getElementById("zir")
let home=document.getElementById("home")
let ketab=document.getElementById("ketab")
let talar=document.getElementById("talar")
let dore=document.getElementById("dore")
let a3=document.getElementById("a32")
let ae=document.getElementById("ae")


padcast.addEventListener("click",()=>{
   zir.style.right="5.8rem"
   a3.innerHTML='<!DOCTYPE html>  <html lang="en">  <head>      <meta charset="UTF-8">      <meta name="viewport" content="width=device-width, initial-scale=1.0">      <title>Document</title>      <link rel="stylesheet" href="./style.css">                     </head>  <body>      <div id="a32">      <div class="bace-pad"> </div>             <div class="p2010">  <img src="./pad/2010.jpg" alt="">  <h2>آخرین لحظات حیات سید الشهداء به روایت شهید مطهری</h2>  <h3>گوینده :آیت الله مطهری</h3>  <button>پادکست را بشنوید</button>          </div>                      <div class="p2012">      <img src="./pad/2013.jpg" alt="">                <h2>عاشورا،طرحی برای زندگی فردی و اجتماعی </h2>              <h3>گوینده :  احمد آکوچکیان</h3>              <button>پادکست را بشنوید</button>   </div>               <div class="p2011">        <img src="./pad/2011.jpg" alt="">                  <h2>وانشناسی رشد با عاشورا</h2>      <h3>گوینده :  احمد آکوچکیان</h3>      <button>پادکست را بشنوید</button>          </div>                      <div class="p2014">                <img src="./pad/2014.jpg" alt="">                                  <h2>قتصاد ایران کجای جهان ایستاده است؟</h2>              <h3>گوینده : سارا صالحیان فرد</h3>              <button>پادکست را بشنوید</button>                  </div>                      <div class="p2015">                        <img src="./pad/2015.webp" alt="">                                                  <h2> پادکست شنیدنی با موضوع روز قدس</h2>                      <h3>گوینده :   سردار سلیمانی</h3>                    <a href="./padcast-main.html"> <button>پادکست را بشنوید</button></a>                           </div>        </div>          <script src="./script.js"></script>  </body>  </html>'
})
home.addEventListener("click",()=>{
zir.style.right="11.8rem"
 a3.innerHTML='<div id="a32"> <div  id="a1">     <img src="./pic/bord.png" alt="" class="bord">  <h2 class="name-aee">آیه روز:</h2> <h1 class="aee">وَمِنَ النَّاسِ مَنْ يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ وَاللَّهُ رَءُوفٌ بِالْعِبَادِ</h1> <h2 class="mani-aee">و از ميان مردم كسى است كه جان خود را براى طلب خشنودى خدا  فروشد و خدا نسبت به [اين] بندگان مهربان است </h2></div> <div class="cover-soal"></div> <div class="tozih"> <h1 class="bace-tozi">در این برنامه میتونید:</h1> <img src="./pic/padcast.jpg.png" alt="" class="pad"> <img src="./pic/ketab.png" alt="" class="ketab"> <img src="./pic/soal.png" alt="" class="soal"> <h4 class="soal-titel" style="direction: rtl;">به زودی...</h4>  <!-- <img src="./ییییییییییییییی.png" alt="" class="soal-1"> -->    <div class="bace-soal">     <h1 class="soa-1">سوال بپرسید ؟؟</h1>     <h3 class="soa-2">در این بخش، شما می‌توانید به اطلاعاتی جامع و معتبر در مورد موضوعات مذهبی دست یابید. ما تلاش می‌کنیم تا با ارائه پاسخ‌های دقیق و مناسب، به شما در درک بهتر مفاهیم دینی کمک کنیم.          چرا سوالات مذهبی خود را با ما در میان بگذارید؟                   ما با بهره‌گیری از منابع معتبر و متخصصان در حوزه دین، پاسخ‌هایی دقیق و مستند ارائه می‌کنیم.         از آموزه‌های دینی گرفته تا تاریخچه و تحلیل‌های مذهبی، می‌توانید سوالات خود را در زمینه‌های مختلف مطرح کنید.          احترام به تمامی اعتقادات و ارائه پاسخی بی‌طرفانه از اصول کاری ماست.</h3>   <button class="buten-soa">ادامه...</button> </div> <h1 class="padcast">پرطرفدار ترین پادکست ها </h1>   <div class="padcast-1">     </div>  <h3 class="akhlaq-matn">اخلاق بندگی</h3>     <div class="play-1" onclick="as()">گوش دادن</div>     <img src="./pic/akhlaq.jpg" alt="" class="akhlaq-pic">   <div class="padcast-2">     </div>   <h3 class="panah-matn">زندگی یعنی امتحان</h3>     <div class="play-2">گوش دادن</div>     <img src="./pic/PANAH.jpg" alt="" class="panah-pic">  <div class="padcast-3">     </div>  <h3 class="shokr-matn" >شکر خدا</h3>     <div class="play-3">گوش دادن</div>     <img src="./pic/shokr.jpg" alt="" class="shokr-pic"></div>  <div class="ketab-titel">محبوب ترین کتاب ها</div> <div class="bace-ketab"> <div class="1010">     <img src="./ketab/1010.jpg" alt=""> <h4>بچه مردم</h4> <h5>رایگان____________ 4.5/5</h5> </div> <div class="1011">     <img src="./ketab/1011.jpg" alt="">     <h4>حلیة المتقین</h4>     <h5>رایگان____________ 4.5/5</h5> </div> <div class="1012">     <img src="./ketab/1012.jpg" alt="">     <h4>شناخت ذهن</h4>     <h5>رایگان____________ 4.7/5</h5> </div> <div class="1014">     <img src="./ketab/1014.jpg" alt="">     <h4>قرار بی قرار</h4>         <h5>رایگان____________ 4/5</h5> </div> <div class="1015">     <img src="./ketab/1015.jpg" alt="">     <h4>پاییز آمد</h4>     <h5>رایگان____________ 3.5/5</h5> </div> </div> <h1 style="position: absolute ;top: 10000rem;">g</h1>  </div> <script src="./script.js"></script>'

 })
 dore.addEventListener("click",()=>{
    zir.style.right="0.8rem"
    a3.innerHTML="<h1></h1>"
 })
 ketab.addEventListener("click",()=>{
    zir.style.right="17.8rem"
    a3.innerHTML="<h1></h1>"
 })
 talar.addEventListener("click",()=>{
    zir.style.right="23.8rem"
    a3.innerHTML=""
 })
