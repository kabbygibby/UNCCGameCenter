/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        $(document).ready(function(){          
            $(".login-page").hide();
            $(".login").css("background", "none");

            $(".login").click(function(){
              $(".signup-page").hide();
              $(".login-page").show();
              $(".signup").css("background", "none");
              $(".login").css("background", "#fff");
            });

            $(".signup").click(function(){
              $(".signup-page").show();
              $(".login-page").hide();
              $(".login").css("background", "none");
              $(".signup").css("background", "#fff");
            });

            $(".button").click(function(){
              $(".input").val("");
            });
            
            });

