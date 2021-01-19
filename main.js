var matsu = new Audio("sounds/matsukensamba.mp3");

function sound()
{
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( 'sounds/matsukensamba.mp3' ).play() ;
}

ball.onmousedown = function(event) {

    

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
  
    moveAt(event.pageX, event.pageY);
  
    // ボールを（pageX、pageY）座標の中心に置く
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mousemove でボールを移動する
    document.addEventListener('mousemove', onMouseMove);
    matsu.play();

    // ボールをドロップする。不要なハンドラを削除する
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
      matsu.pause();
    };
    

  };
  
  ondragstart = function() {
    return false;
  };



