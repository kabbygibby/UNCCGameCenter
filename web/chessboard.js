/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var board1 = Chessboard('board','start');
var board2 = Chessboard('board2', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
});

$('#startBtn').on('click', board2.start);
$('#clearBtn').on('click', board2.clear);



