/*!build time : 2013-10-15 5:46:27 PM*/
KISSY.add("gallery/uploader/1.5/themes/daogouUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e=b.all;return a.extend(d,c,{_selectHandler:function(a){var b=a.files[0],c=b.name;e(".J_FileName").val(c)},_startHandler:function(a){var b=this,c=a.file;b._showMsg(c,".J_UploadingMsg")},_successHandler:function(a){var b=this,c=a.file;b._showMsg(c,".J_SuccessMsg")},_errorHandler:function(a){var b=this,c=a.file;if(!c)return!1;var d=a.file.id,f=a.msg;e(".J_ErrorMsg_"+d).html(f),b._showMsg(a.file,".J_ErrorMsg")},_showMsg:function(a,b){var c=e(a.target);c.all(".status-msg").hide(),c.all(b).show()}},{ATTRS:{name:{value:"daogouUploader"},fileTpl:{value:'<div id="queue-file-{id}" class="file-uploading" data-name="{name}"><div class="J_UploadingMsg status-msg"><p class="file-name">{name}</p><p class="tx">\u6b63\u5728\u90e8\u7f72\uff0c\u8bf7\u7a0d\u5019...</p><div class="J_ProgressBar_{id} f-l uploader-progress"><img class="loading" src="http://img01.taobaocdn.com/tps/i1/T1F5tVXjRfXXXXXXXX-16-16.gif" alt="loading" /></div></div><div class="J_SuccessMsg status-msg"><i class="i-success"></i><div class="tx"><b>\u4e0a\u4f20\u6210\u529f!</b></div><div class="J_ErrorMsg status-msg"> <i class="i-tip"></i> <div class="tx"><b>\u4e0a\u4f20\u5931\u8d25\uff1a<i class="dg-light J_ErrorMsg_{id}"></i></b></div></div></div>'}}}),d},{requires:["node","gallery/gallery/uploader/1.5/themes/default/index"]});