"use strict";(self["webpackChunksangbok"]=self["webpackChunksangbok"]||[]).push([[470],{2803:function(t,s,i){i.r(s);var e=i(6252),n=i(9963),o=(i(7658),i(3907)),l=i(2201),a=i(640),r=i.n(a),m=i(5355),d=i(8595),c=i(359),h=i(3926);s["default"]=(0,e.aZ)({name:"ListView",setup(){return{store:(0,o.oR)(m.Jy)}},data(){const t=(0,l.yj)(),s=(0,h.Lv)(t.params.listId),i=(0,o.oR)(m.Jy);return{listIdx:s,qrVisible:!1,qrImage:void 0,name:i.state.lists[s].name,description:i.state.lists[s].description}},computed:{list(){const t=(0,o.oR)(m.Jy),s=(0,l.yj)(),i=(0,h.Lv)(s.params.listId),e=t.state.lists[i];return{...e,songs:(0,h.Ff)(e.songs)}},link(){return window.location.origin+window.location.pathname+"#/list/add/"+encodeURI(JSON.stringify({...this.list,songs:this.list.songs.map((t=>t.index))}))}},methods:{hasSheetMusic:h.ZU,swipeHandler(t){"left"===t&&this.$router.go(-1)},clickHandler(t){this.$router.push("/list/"+this.$route.params.listId+"/song/"+t)},updateMeta(){this.store.commit("setListMeta",{list:this.listIdx,name:this.name,description:this.description})},goToGenerator(){this.store.commit("clear");const t=this.list;for(const s of t.songs)s&&this.store.commit("add",s.index);this.store.commit("toggleSettingTo",{key:"generator",value:!0})},async showQR(){this.qrVisible=!0;const t=await i.e(356).then(i.t.bind(i,2592,19));this.qrImage=await t.toDataURL(this.link)},copyLink(){const t=r()(this.link);t&&(this.qrVisible=!1)}},render(){return(0,e.Wm)(e.HY,null,[(0,e.Wm)(d.Z,{swipeHandler:this.swipeHandler,right:"hide"},{default:()=>[(0,e.Wm)("div",{class:"main"},[this.store.state.settings.makelist&&(0,e.Wm)("button",{class:"button left",onClick:this.goToGenerator,title:"Skapa sångblad"},[(0,e.Uk)("🖶")]),(0,e.Wm)("button",{class:"button right",onClick:this.showQR,title:"Dela"},[(0,e.Uk)("📤")]),!this.store.state.settings.makelist&&(0,e.Wm)("div",{class:"titlecontainer"},[(0,e.Wm)("h2",null,[this.list.name]),(0,e.Wm)("p",{style:"text-align: center;"},[this.list.description])]),this.store.state.settings.makelist&&(0,e.Wm)("div",{style:"text-align: center;margin-top: 1em;"},[(0,e.wy)((0,e.Wm)("input",{type:"text",class:"secondary","onUpdate:modelValue":t=>this.name=t,onKeyup:this.updateMeta,placeholder:"Listans namn",style:"margin-bottom:0.5em;"},null),[[n.nr,this.name]]),(0,e.Wm)("br",null,null),(0,e.wy)((0,e.Wm)("input",{type:"text",class:"secondary","onUpdate:modelValue":t=>this.description=t,onKeyup:this.updateMeta,placeholder:"Beskrivning"},null),[[n.nr,this.description]])]),(0,e.Wm)("table",{class:"songbook"},[this.list.songs.map(((t,s)=>(0,e.Wm)("tr",null,[(0,e.Wm)("td",{class:"index",innerHTML:t.index,onClick:()=>this.clickHandler(s)},null),(0,e.Wm)("td",{class:"name",onClick:()=>this.clickHandler(s)},[(0,e.Wm)("span",{innerHTML:t.title},null),(0,h.ZU)(t)&&this.store.state.settings.sheetmusic&&!this.store.state.settings.makelist&&(0,e.Wm)("span",{class:"sheetmusicicon"},[(0,e.Uk)("𝄢")])]),this.store.state.settings.makelist&&(0,e.Wm)("td",{class:"icon"},[(0,e.Wm)("span",{class:{operation:!0,up:!0,disabled:0===s},onClick:()=>this.store.commit("moveInList",{list:this.listIdx,index:s,direction:-1})},[(0,e.Uk)("▲")]),(0,e.Wm)("span",{class:{operation:!0,down:!0,disabled:s===this.list.songs.length-1},onClick:()=>this.store.commit("moveInList",{list:this.listIdx,index:s,direction:1})},[(0,e.Uk)("▼")]),(0,e.Wm)("span",{class:"operation delete",onClick:()=>this.store.commit("deleteFromList",{list:this.listIdx,index:s})},[(0,e.Uk)("✖")])])])))])])]}),this.qrVisible&&(0,e.Wm)(c.Z,null,{default:()=>[(0,e.Wm)("header",null,[(0,e.Wm)("h3",null,[(0,e.Uk)("Dela")])]),(0,e.Wm)("div",{style:"text-align: center;"},[(0,e.Wm)("img",{src:this.qrImage,style:"text-align: center; filter: invert(0.87);"},null)]),(0,e.Wm)("footer",{style:"margin-top: 0.5em;"},[(0,e.Wm)("div",{class:"button button-2",onClick:this.copyLink},[(0,e.Uk)("Kopiera länk")]),(0,e.Wm)("div",{class:"button button-2",onClick:()=>{this.qrVisible=!1}},[(0,e.Uk)("Avbryt")])])]})])}})},7138:function(t,s,i){i.r(s);var e=i(6252),n=(i(7658),i(3907)),o=i(5355),l=i(8595);s["default"]=(0,e.aZ)({name:"ListsView",components:{Swiper:l.Z},data(){return{lists:(0,n.oR)(o.Jy).state.lists}},setup(){return{store:(0,n.oR)(o.Jy)}},methods:{swipeHandler(t){"left"===t&&this.$router.push("/")},newList(){this.store.commit("newList")},deleteList(t){this.store.commit("deleteList",t)}},render(){return(0,e.Wm)(l.Z,{swipeHandler:this.swipeHandler,right:"hide"},{default:()=>[(0,e.Wm)("div",{class:"main"},[this.store.state.settings.makelist&&(0,e.Wm)("button",{class:"button left",onClick:this.newList},[(0,e.Uk)("+")]),(0,e.Wm)("h2",null,[(0,e.Uk)("Listor")]),(0,e.Wm)("table",{class:"songbook"},[this.lists.map(((t,s)=>(0,e.Wm)("tr",null,[(0,e.Wm)("td",{class:"index",onClick:()=>this.$router.push("/list/"+s)},[t.name]),(0,e.Wm)("td",{class:"name",onClick:()=>this.$router.push("/list/"+s)},[t.description]),this.store.state.settings.makelist&&(0,e.Wm)("td",{class:"icon"},[(0,e.Wm)("span",{class:{operation:!0,up:!0,disabled:0===s},onClick:()=>this.store.commit("moveList",{index:s,direction:-1})},[(0,e.Uk)("▲")]),(0,e.Wm)("span",{class:{operation:!0,down:!0,disabled:s===this.lists.length-1},onClick:()=>this.store.commit("moveList",{index:s,direction:1})},[(0,e.Uk)("▼")]),(0,e.Wm)("span",{class:"operation delete",onClick:()=>this.deleteList(s)},[(0,e.Uk)("✖")])])])))])])]})}})},1620:function(t,s,i){i.r(s);var e=i(6252),n=i(3090);function o(t){return(t.match(/-sf(\d(\.\d+)?)-/i)||["",""])[1]}function l(t){const s=n.filter((s=>t&&s.indexOf(t)>-1)),i=Array.from(new Set(s.map(o)));return i.sort()}function a(t,s){const e=n.filter((s=>t&&s.indexOf(t)>-1)),a=e.filter((i=>o(i)===l(t)[s])),r=i.p;return a.map((t=>r+"msvg/"+t))}s["default"]=(0,e.aZ)({name:"SheetMusicRenderer",props:{src:String},data(){const t=this.src+(this.src?.endsWith(".")?"":".");return{src2:t,isLoading:!0,zoomIdx:Math.min(window.matchMedia&&window.matchMedia("only screen and (max-width: 760px)").matches?5:3,l(t).length-1)}},methods:{zoom(t){this.zoomIdx+=t,this.zoomIdx=Math.max(0,Math.min(this.zoomIdx,l(this.src2).length-1))}},render(){return(0,e.Wm)("div",{class:"component-sheet-music-renderer"},[(0,e.Wm)("div",{class:"zoombuttoncontainer"},[(0,e.Wm)("button",{onClick:()=>this.zoom(-1),class:{button:!0,disabled:0===this.zoomIdx}},[(0,e.Uk)("🔍-")]),(0,e.Wm)("button",{onClick:()=>this.zoom(1),class:{button:!0,disabled:this.zoomIdx===l(this.src2).length-1}},[(0,e.Uk)("🔍+")])]),a(this.src2,this.zoomIdx).map((t=>(0,e.Wm)("div",null,[(0,e.Wm)("img",{src:t,alt:this.isLoading?"Laddar...":"Noter",onLoad:()=>{this.isLoading=!1}},null)]))),0===a(this.src2,this.zoomIdx).length&&(0,e.Wm)("div",null,[(0,e.Wm)("h2",null,[(0,e.Uk)("Fel")]),(0,e.Wm)("p",{style:"text-align: center;"},[(0,e.Uk)("Inga noter hittades, trots att de borde finnas. Du borde skicka ett surt mail till webmaster eller sångbokens projektledare.")])]),this.isLoading&&(0,e.Wm)("div",null,[(0,e.Wm)("h2",null,[(0,e.Uk)("Laddar...")])]),(0,e.Wm)("p",{class:"notice"},[(0,e.Uk)("Notvisaren är experimentell.")])])}})}}]);
//# sourceMappingURL=listview.637b53aa.js.map