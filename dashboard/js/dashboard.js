!function(t){t.fn.createCalendar=function(e){let n=t.extend({backgroundColor:"lightseagreen",leftBackgroundColor:"yellow",currentDayColor:"purple",eventText:"this is an event"},e),s={backgroundColor:n.backgroundColor,leftBackgroundColor:n.leftBackgroundColor,currentDayColor:n.currentDayColor,eventText:n.eventText};this.data("createCalendar",{setBackgroundColor:function(e=null){s.backgroundColor=e,t(document).ready(function(){t(this).find(".calendar_background").css("background",s.backgroundColor)})},getBackgroundColor:function(){return s.backgroundColor},setLeftBackgroundColor:function(e=null){s.leftBackgroundColor=e,t(document).ready(function(){t(this).find(".calendar-left").css("background",s.leftBackgroundColor)})},getLeftBackgroundColor:function(){return s.leftBackgroundColor},setCurrentDayColor:function(e=null){s.currentDayColor=e,t(document).ready(function(){t(this).find(".current_calender_background").css("background",s.currentDayColor)})},getCurrentDayColor:function(){return s.currentDayColor},setEventText:function(e){s.eventText=e,t(document).ready(function(){t(this).find(".current_event_details").text(s.eventText)})},getEventText:function(){return s.eventText}});let a=`
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
  </div>`;return t(document).ready(function(){(()=>{let e=new Date,n=e.toDateString().split(" "),s=n[1],a=n[0],l={MON:"MONDAY",TUE:"TUESDAY",WED:"WEDNESDAY",THU:"THURSDAY",FRI:"FRIDAY",SAT:"SATURDAY",SUN:"SUNDAY"};t(".year").text(e.getFullYear()),l.hasOwnProperty(a.toUpperCase())&&t(".day").text(l[a.toUpperCase()]).css("font-weight","600"),10>e.getDay()&&t(".num-date").text(e.getDate()),t(".days div").each(function(){let e=t(this)["0"].className;t(`.${e} p`).text().trim()===a.toUpperCase()&&t(this).css("color","black").css("font-weight","600")}),t(".month-hover").each(function(){t(this).text().trim()===s&&t(this).css("color","black").css("font-weight","600")});let o=e.getFullYear(),r=e.getMonth(),c=new Date(o,r,1),i=c.toDateString().split(" ")[0].toUpperCase(),d=new Date(o,r+1,0).getDate(),u=[],p=["MON","TUE","WED","THU","FRI","SAT","SUN"],h=t.inArray(i,p);for(let v=1;v<=d;v++)u.push({[p[h]]:v}),h=(h+1)%7;t.each(u,function(n,s){t.each(s,function(n,s){t(".days div").each(function(a){let l=t(this)["0"].className;t(`.${l} p`).text().trim()===n&&(s===e.getDate()?t(t(`.${l} ul`)).append(`<li style="position: relative; padding: 16.5px 8px;" class="current_calender_date"> ${s}
                <span class="current_calender_background"></span></li>`):t(t(`.${l} ul`)).append(`<li style="padding: 16.5px 8px;"> ${s} </li>`))})})}),"font7"===t("body").css("font-family")&&t("body").css("font-size-adjust","0.4")})()}),t(this).html(a)}}(jQuery);