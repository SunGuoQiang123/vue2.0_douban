webpackJsonp([3],{210:function(e,o,t){t(225);var a=t(0)(t(217),t(235),"data-v-4ad9e8fc",null);e.exports=a.exports},217:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(13),i=t.n(a),n=t(7),s=t.n(n),r=t(4),A=t(6),l=t.n(A);o.default={name:"BookItemList",data:function(){return{loading:!0}},components:{loading:s.a,ratingStar:l.a},methods:{searchBooks:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$store.dispatch({type:"searchBooks",content:o||this.$route.params.content}).then(function(){e.loading=!1})}},computed:i()({},t.i(r.b)({booksList:function(e){return e.search.searchResult}})),created:function(){this.searchBooks()},beforeRouteUpdate:function(e,o,t){var a=e.params.content;this.loaing=!0,this.searchBooks(a),t()}}},221:function(e,o,t){o=e.exports=t(207)(!0),o.push([e.i,".book_item[data-v-4ad9e8fc]{font-size:12px;margin:15px 0}.book_item a[data-v-4ad9e8fc]{display:-webkit-box;display:-ms-flexbox;display:flex}.book_item p[data-v-4ad9e8fc]{line-height:24px;margin-left:10px;color:#111}.book_item p.book_title[data-v-4ad9e8fc]{color:#37a}.book_item p.book_rating[data-v-4ad9e8fc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.book_item p.book_rating span[data-v-4ad9e8fc]{margin-left:10px}.book_item p.book_rating span.book_rating_score[data-v-4ad9e8fc]{color:#e09015}.book_item p.book_summary[data-v-4ad9e8fc]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;color:#666}","",{version:3,sources:["G:/项目/vuetest/vuedouban/src/pages/BookItemList.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,aAAe,CAChB,AACD,8BACI,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACjB,AACD,8BACI,iBAAkB,AAClB,iBAAkB,AAClB,UAAY,CACf,AACD,yCACI,UAAY,CACf,AACD,0CACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC/B,AACD,+CACM,gBAAkB,CACvB,AACD,iEACM,aAAe,CACpB,AACD,2CACI,gBAAiB,AACjB,uBAAwB,AACxB,oBAAqB,AACrB,4BAA6B,AAC7B,qBAAsB,AACtB,UAAY,CACf",file:"BookItemList.vue",sourcesContent:["\n.book_item[data-v-4ad9e8fc] {\n  font-size: 12px;\n  margin: 15px 0;\n}\n.book_item a[data-v-4ad9e8fc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.book_item p[data-v-4ad9e8fc] {\n    line-height: 24px;\n    margin-left: 10px;\n    color: #111;\n}\n.book_item p.book_title[data-v-4ad9e8fc] {\n    color: #37a;\n}\n.book_item p.book_rating[data-v-4ad9e8fc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.book_item p.book_rating span[data-v-4ad9e8fc] {\n      margin-left: 10px;\n}\n.book_item p.book_rating span.book_rating_score[data-v-4ad9e8fc] {\n      color: #e09015;\n}\n.book_item p.book_summary[data-v-4ad9e8fc] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    color: #666;\n}\n"],sourceRoot:""}])},225:function(e,o,t){var a=t(221);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(208)("719c929b",a,!0)},235:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"bookList"}},[t("loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),e._v(" "),e.loading?e._e():t("div",{staticClass:"booksWrapper main"},e._l(e.booksList,function(o){return t("div",{key:o.id,staticClass:"book_item"},[t("router-link",{attrs:{to:"/book/subject/"+o.id}},[t("div",[t("img",{attrs:{src:o.images.medium}})]),e._v(" "),t("div",[t("p",{staticClass:"book_title"},[e._v(e._s(o.title))]),e._v(" "),t("p",[e._v(e._s(o.author.join(","))+" / "+e._s(o.publisher)+" / "+e._s(o.pubdate)+" / "+e._s(o.price))]),e._v(" "),"0.0"!==o.rating.average?t("p",{staticClass:"book_rating"},[t("rating-star",{attrs:{commitScore:o.rating.average/2}}),e._v(" "),t("span",{staticClass:"book_rating_score"},[e._v(e._s(o.rating.average))]),e._v(" "),t("span",[e._v("("+e._s(o.rating.numRaters)+"人评价)")])],1):t("p",[e._v("暂无评价")]),e._v(" "),t("p",{staticClass:"book_summary"},[e._v(e._s(o.summary))])])])],1)}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.21de08a72c19d5dbe036.js.map