class LampApi{static get URL(){return"https://private-anon-e05495aa0f-lampshop.apiary-mock.com/"}static async get(){let t,a=new URL(LampApi.URL+"lamps");try{t=await fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}),t.ok?t=await t.json():console.log("Ошибка HTTP: "+t.status)}catch(t){console.log("Ошибка Fetch!\n"+t)}return t}}