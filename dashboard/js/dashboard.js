!function(t){t.fn.createCalendar=function(e){let n=t.extend({backgroundColor:"lightseagreen",leftBackgroundColor:"yellow",currentDayColor:"purple",eventText:"this is an event",fontType:"font1"},e),o={backgroundColor:n.backgroundColor,leftBackgroundColor:n.leftBackgroundColor,currentDayColor:n.currentDayColor,eventText:n.eventText,fontType:n.fontType};this.data("createCalendar",{setBackgroundColor:function(e=null){o.backgroundColor=e,t(document).ready(function(){t(this).find(".calendar_background").css("background",o.backgroundColor)})},getBackgroundColor:function(){return o.backgroundColor},setLeftBackgroundColor:function(e=null){o.leftBackgroundColor=e,t(document).ready(function(){t(this).find(".calendar-left").css("background",o.leftBackgroundColor)})},getLeftBackgroundColor:function(){return o.leftBackgroundColor},setCurrentDayColor:function(e=null){o.currentDayColor=e,t(document).ready(function(){t(this).find(".current_calender_background").css("background",o.currentDayColor)})},getCurrentDayColor:function(){return o.currentDayColor},setEventText:function(e){o.eventText=e,t(document).ready(function(){t(this).find(".current_event_details").text(o.eventText)})},getEventText:function(){return o.eventText},setFontType:function(e){o.fontType=e,t(document).ready(function(){"font7"===o.fontType?(t(this).find("body").css("font-family",o.fontType),t(this).find("body").css("font-size-adjust","0.4")):t(this).find("body").css("font-family",o.fontType)})},getFontType:function(){return o.fontType}});let s=`
    <div class="c-container">
      <div class="calendar_background">
        <div class="calendar-base">
          <div class="year"></div>
            <div class="months">
              <span class="month-hover">Jan</span>
              <span class="month-hover">Feb</span> 
              <span class="month-hover">Mar</span> 
              <span class="month-hover">Apr</span>
              <span class="month-hover">May</span>
              <span class="month-hover">Jun</span>
              <span class="month-hover">Jul</span> 
              <span class="month-hover">Aug</span> 
              <span class="month-hover">Sep</span> 
              <span class="month-hover">Oct</span> 
              <span class="month-hover">Nov</span> 
              <span class="month-hover">Dec</span>
            </div>
  
          <div class="days">
            <div class="mon">
              <p>MON</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="tue">
              <p>TUE</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="wed">
              <p>WED</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="thu">
              <p>THU</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="fri">
              <p>FRI</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="sat">
              <p>SAT</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
            <div class="sun">
              <p>SUN</p>
              <ul style="list-style-type: none; color: black; font-weight: lighter;"></ul>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-left">

          <div style="padding: 30px 0px 0px 0px; text-align: center;" class="num-date-and-day">
          <div class="num-date"></div>
          <div class="day"></div>
      </div>
      <div class="current-events">Current Events
        <br/>
        <ul>
          <li class="current_event_details" style="font-size: 10px; margin-left: -12px;">This is an event</li>
        </ul>
      </div>
    </div>
  </div>`;return t(document).ready(function(){(()=>{let e=new Date,n=e.toDateString().split(" "),o=n[1],s=n[0],a={MON:"MONDAY",TUE:"TUESDAY",WED:"WEDNESDAY",THU:"THURSDAY",FRI:"FRIDAY",SAT:"SATURDAY",SUN:"SUNDAY"};t(".year").text(e.getFullYear()),a.hasOwnProperty(s.toUpperCase())&&t(".day").text(a[s.toUpperCase()]).css("font-weight","600"),10>e.getDay()&&t(".num-date").text(e.getDate()),t(".days div").each(function(){let e=t(this)["0"].className;t(`.${e} p`).text().trim()===s.toUpperCase()&&t(this).css("color","black").css("font-weight","600")}),t(".month-hover").each(function(){t(this).text().trim()===o&&t(this).css("color","black").css("font-weight","600")});let l=e.getFullYear(),r=e.getMonth(),c=new Date(l,r,1),i=c.toDateString().split(" ")[0].toUpperCase(),d=new Date(l,r+1,0).getDate(),u=[],p=["MON","TUE","WED","THU","FRI","SAT","SUN"],h=t.inArray(i,p);for(let f=1;f<=d;f++)u.push({[p[h]]:f}),h=(h+1)%7;t.each(u,function(n,o){t.each(o,function(n,o){t(".days div").each(function(s){let a=t(this)["0"].className;t(`.${a} p`).text().trim()===n&&(o===e.getDate()?t(t(`.${a} ul`)).append(`<li style="position: relative; padding: 16.5px 8px;" class="current_calender_date"> ${o}
                <span class="current_calender_background"></span></li>`):t(t(`.${a} ul`)).append(`<li style="padding: 16.5px 8px;"> ${o} </li>`))})})})})()}),t(this).html(s)}}(jQuery);