var randomValue;var audio=new Audio('sound/CaseOpen2.mp3');var Common=new Audio('sound/Common.ogg');var Legendary=new Audio('sound/Legendary.ogg');var Mythical=new Audio('sound/Mythical.ogg');var Rare=new Audio('sound/Rare.ogg');var Uncommon=new Audio('sound/Uncommon.ogg');var Double=new Audio('sound/Double.ogg');var Super=new Audio('sound/Super.ogg');var Respin=new Audio('sound/Respin.ogg');var Covert=new Audio('sound/Covert.ogg');var Classified=new Audio('sound/Classified.ogg');var Gold=new Audio('sound/Gold.ogg');var spunAmount=0;function featureSlide(){$(".before-spin").slideUp("fast");var parent=$(".roulette-item-wrapper");randomValue=Math.floor((Math.random()*80)+1);spunAmount=spunAmount+$(".cases-block").children()[150].children[0].getBoundingClientRect().left-250-47+randomValue;$(".roulette-item").css("transform","translateX(-"+spunAmount+"px)");audio.play();setTimeout(function(){$(".after-spin").slideDown("fast");Common.volume=0.1;Legendary.volume=0.1;Mythical.volume=0.1;Rare.volume=0.1;Uncommon.volume=0.1;Covert.volume=0.1;Classified.volume=0.1;Gold.volume=0.1;var winDiv=parent.children()[150].getElementsByTagName("label");if($(parent.children()[150]).hasClass("gold")){console.log("gold");Gold.play();}else{switch($(winDiv).attr('class'))
{case "consumergrade":console.log("consumergrade");Common.play();break;case "industrialgrade":console.log("industrialgrade");Uncommon.play();break;case "mil-spec":console.log("mil-spec");Rare.play();break;case "restricted":console.log("restricted");Mythical.play();break;case "classified":console.log("classified");Classified.play();break;case "covert":console.log("covert");Covert.play();break;case "meleeweapons":console.log("meleeweapons");Legendary.play();break;}}},10000);}
function addToCart(id){$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:parent.baseUri,async:true,cache:false,dataType:'json',data:'controller=cart&add=1&ajax=true&qty=1&id_product='+id+'&token='+parent.static_token,success:function(jsonData)
{parent.ajaxCart.updateCart(jsonData);parent.jQuery.fancybox.close();}});}
function quickBuy(id,isLogged){$('html').addClass('loader');var fancybox_wrap=parent.document.getElementsByClassName('fancybox-wrap')[0];var fancybox_iframe=fancybox_wrap.getElementsByTagName('iframe')[0];fancybox_wrap.classList.add('fancybox-wide-size');$.ajax({type:'POST',headers:{"cache-control":"no-cache"},url:parent.baseUri,async:true,cache:false,dataType:'json',data:'controller=cart&add=1&ajax=true&qty=1&id_product='+id+'&token='+parent.static_token,success:function(jsonData)
{parent.ajaxCart.updateCart(jsonData);parent.location.href=parent.baseDir+"quick-order";parent.jQuery.fancybox.close();}});}
function onComplite(){if(window.top!==window){try{window.parent.$.fancybox.update();}catch(e){}}};var onCompliteVar=function(){if(window.top!==window){try{window.parent.$.fancybox.update();}catch(e){}}};function slideImages(){$(".before-spin").slideUp("fast",onCompliteVar);var widthHalfContainer=$("body > .container").outerWidth()/2;var isFeature=false;var itemText=$("body > div > div.roulette-content > div > div:nth-child(76) > h3.roulette-subtitle-first")[0].innerText;console.log(itemText);if(itemText.indexOf("Super spin")>-1||itemText.indexOf("Double item")>-1||itemText.indexOf("Re-spin")>-1){isFeature=true;}else if(itemText.indexOf("Case win")>-1){isCaseWin=true;}
var parent=$(".roulette-item-wrapper");var winDiv=parent.children()[0].getElementsByTagName("label");randomValue=Math.floor((Math.random()*80)+1);spunAmount=$(".roulette-item-wrapper").children().get(75).children[0].getBoundingClientRect().left-widthHalfContainer+7+randomValue;$(".roulette-item").css("transform","translateX(-"+spunAmount+"px)");audio.play();setTimeout(function(){var itemText=$("body > div > div.roulette-content > div > div:nth-child(76) > h3.roulette-subtitle-first")[0].innerText;console.log(itemText);if((itemText=="DOUBLE ITEM!")||(itemText=="SUPER SPIN!")||(itemText=="RE-SPIN!")){$("#featureSpin").slideDown("fast");}else{$(".after-spin").slideDown("fast");}
Common.volume=0.1;Legendary.volume=0.1;Mythical.volume=0.1;Rare.volume=0.1;Uncommon.volume=0.1;Double.volume=0.1;Super.volume=0.1;Respin.volume=0.1;Covert.volume=0.1;Classified.volume=0.1;Gold.volume=0.1;if($(parent.children()[75]).hasClass("gold")){console.log("gold");Gold.play();}else{switch($(winDiv).attr('class'))
{case "consumergrade":console.log("consumergrade");Common.play();break;case "industrialgrade":console.log("industrialgrade");Uncommon.play();break;case "mil-spec":console.log("mil-spec");Rare.play();break;case "restricted":console.log("restricted");Mythical.play();break;case "classified":console.log("classified");Classified.play();break;case "covert":console.log("covert");Covert.play();break;case "meleeweapons":console.log("meleeweapons");Legendary.play();break;case "Double":console.log("Double");Double.play();break;case "Super":console.log("Super");Super.play();break;case "Respin":console.log("Respin");Respin.play();break;}}},10000);}
function reSlideImages(){$(".roulette-item").css("transform","");spunAmount=0;randomValue=Math.floor((Math.random()*120)+1);var parent=$(".roulette-item-wrapper");var divs=parent.children();while(divs.length){parent.append(divs.splice(Math.floor(Math.random()*divs.length),1)[0]);}
$(".after-spin").slideUp("fast",onCompliteVar);$("#featureSpin").slideUp("fast");slideImages();}