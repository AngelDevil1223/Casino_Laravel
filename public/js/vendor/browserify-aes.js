(self.webpackChunk=self.webpackChunk||[]).push([[4665],{74497:(e,t,r)=>{var i=r(89509).Buffer;function c(e){i.isBuffer(e)||(e=i.from(e));for(var t=e.length/4|0,r=new Array(t),c=0;c<t;c++)r[c]=e.readUInt32BE(4*c);return r}function n(e){for(;0<e.length;e++)e[0]=0}function a(e,t,r,i,c){for(var n,a,h,o,s=r[0],p=r[1],l=r[2],u=r[3],f=e[0]^t[0],_=e[1]^t[1],y=e[2]^t[2],v=e[3]^t[3],d=4,B=1;B<c;B++)n=s[f>>>24]^p[_>>>16&255]^l[y>>>8&255]^u[255&v]^t[d++],a=s[_>>>24]^p[y>>>16&255]^l[v>>>8&255]^u[255&f]^t[d++],h=s[y>>>24]^p[v>>>16&255]^l[f>>>8&255]^u[255&_]^t[d++],o=s[v>>>24]^p[f>>>16&255]^l[_>>>8&255]^u[255&y]^t[d++],f=n,_=a,y=h,v=o;return n=(i[f>>>24]<<24|i[_>>>16&255]<<16|i[y>>>8&255]<<8|i[255&v])^t[d++],a=(i[_>>>24]<<24|i[y>>>16&255]<<16|i[v>>>8&255]<<8|i[255&f])^t[d++],h=(i[y>>>24]<<24|i[v>>>16&255]<<16|i[f>>>8&255]<<8|i[255&_])^t[d++],o=(i[v>>>24]<<24|i[f>>>16&255]<<16|i[_>>>8&255]<<8|i[255&y])^t[d++],[n>>>=0,a>>>=0,h>>>=0,o>>>=0]}var h=[0,1,2,4,8,16,32,64,128,27,54],o=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=[],i=[],c=[[],[],[],[]],n=[[],[],[],[]],a=0,h=0,o=0;o<256;++o){var s=h^h<<1^h<<2^h<<3^h<<4;s=s>>>8^255&s^99,r[a]=s,i[s]=a;var p=e[a],l=e[p],u=e[l],f=257*e[s]^16843008*s;c[0][a]=f<<24|f>>>8,c[1][a]=f<<16|f>>>16,c[2][a]=f<<8|f>>>24,c[3][a]=f,f=16843009*u^65537*l^257*p^16843008*a,n[0][s]=f<<24|f>>>8,n[1][s]=f<<16|f>>>16,n[2][s]=f<<8|f>>>24,n[3][s]=f,0===a?a=h=1:(a=p^e[e[e[u^p]]],h^=e[e[h]])}return{SBOX:r,INV_SBOX:i,SUB_MIX:c,INV_SUB_MIX:n}}();function s(e){this._key=c(e),this._reset()}s.blockSize=16,s.keySize=32,s.prototype.blockSize=s.blockSize,s.prototype.keySize=s.keySize,s.prototype._reset=function(){for(var e=this._key,t=e.length,r=t+6,i=4*(r+1),c=[],n=0;n<t;n++)c[n]=e[n];for(n=t;n<i;n++){var a=c[n-1];n%t==0?(a=a<<8|a>>>24,a=o.SBOX[a>>>24]<<24|o.SBOX[a>>>16&255]<<16|o.SBOX[a>>>8&255]<<8|o.SBOX[255&a],a^=h[n/t|0]<<24):t>6&&n%t==4&&(a=o.SBOX[a>>>24]<<24|o.SBOX[a>>>16&255]<<16|o.SBOX[a>>>8&255]<<8|o.SBOX[255&a]),c[n]=c[n-t]^a}for(var s=[],p=0;p<i;p++){var l=i-p,u=c[l-(p%4?0:4)];s[p]=p<4||l<=4?u:o.INV_SUB_MIX[0][o.SBOX[u>>>24]]^o.INV_SUB_MIX[1][o.SBOX[u>>>16&255]]^o.INV_SUB_MIX[2][o.SBOX[u>>>8&255]]^o.INV_SUB_MIX[3][o.SBOX[255&u]]}this._nRounds=r,this._keySchedule=c,this._invKeySchedule=s},s.prototype.encryptBlockRaw=function(e){return a(e=c(e),this._keySchedule,o.SUB_MIX,o.SBOX,this._nRounds)},s.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),r=i.allocUnsafe(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r},s.prototype.decryptBlock=function(e){var t=(e=c(e))[1];e[1]=e[3],e[3]=t;var r=a(e,this._invKeySchedule,o.INV_SUB_MIX,o.INV_SBOX,this._nRounds),n=i.allocUnsafe(16);return n.writeUInt32BE(r[0],0),n.writeUInt32BE(r[3],4),n.writeUInt32BE(r[2],8),n.writeUInt32BE(r[1],12),n},s.prototype.scrub=function(){n(this._keySchedule),n(this._invKeySchedule),n(this._key)},e.exports.AES=s},62422:(e,t,r)=>{var i=r(74497),c=r(89509).Buffer,n=r(71027),a=r(35717),h=r(83288),o=r(67295),s=r(20685);function p(e,t,r,a){n.call(this);var o=c.alloc(4,0);this._cipher=new i.AES(t);var p=this._cipher.encryptBlock(o);this._ghash=new h(p),r=function(e,t,r){if(12===t.length)return e._finID=c.concat([t,c.from([0,0,0,1])]),c.concat([t,c.from([0,0,0,2])]);var i=new h(r),n=t.length,a=n%16;i.update(t),a&&(a=16-a,i.update(c.alloc(a,0))),i.update(c.alloc(8,0));var o=8*n,p=c.alloc(8);p.writeUIntBE(o,0,8),i.update(p),e._finID=i.state;var l=c.from(e._finID);return s(l),l}(this,r,p),this._prev=c.from(r),this._cache=c.allocUnsafe(0),this._secCache=c.allocUnsafe(0),this._decrypt=a,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}a(p,n),p.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16;t<16&&(t=c.alloc(t,0),this._ghash.update(t))}this._called=!0;var r=this._mode.encrypt(this,e);return this._decrypt?this._ghash.update(e):this._ghash.update(r),this._len+=e.length,r},p.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var e=o(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&function(e,t){var r=0;e.length!==t.length&&r++;for(var i=Math.min(e.length,t.length),c=0;c<i;++c)r+=e[c]^t[c];return r}(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=e,this._cipher.scrub()},p.prototype.getAuthTag=function(){if(this._decrypt||!c.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},p.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=e},p.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e),this._alen+=e.length},e.exports=p},44696:(e,t,r)=>{var i=r(71494),c=r(66193),n=r(55415);t.createCipher=t.Cipher=i.createCipher,t.createCipheriv=t.Cipheriv=i.createCipheriv,t.createDecipher=t.Decipher=c.createDecipher,t.createDecipheriv=t.Decipheriv=c.createDecipheriv,t.listCiphers=t.getCiphers=function(){return Object.keys(n)}},66193:(e,t,r)=>{var i=r(62422),c=r(89509).Buffer,n=r(45),a=r(25969),h=r(71027),o=r(74497),s=r(13048);function p(e,t,r){h.call(this),this._cache=new l,this._last=void 0,this._cipher=new o.AES(t),this._prev=c.from(r),this._mode=e,this._autopadding=!0}function l(){this.cache=c.allocUnsafe(0)}function u(e,t,r){var h=n[e.toLowerCase()];if(!h)throw new TypeError("invalid suite type");if("string"==typeof r&&(r=c.from(r)),"GCM"!==h.mode&&r.length!==h.iv)throw new TypeError("invalid iv length "+r.length);if("string"==typeof t&&(t=c.from(t)),t.length!==h.key/8)throw new TypeError("invalid key length "+t.length);return"stream"===h.type?new a(h.module,t,r,!0):"auth"===h.type?new i(h.module,t,r,!0):new p(h.module,t,r)}r(35717)(p,h),p.prototype._update=function(e){var t,r;this._cache.add(e);for(var i=[];t=this._cache.get(this._autopadding);)r=this._mode.decrypt(this,t),i.push(r);return c.concat(i)},p.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return function(e){var t=e[15];if(t<1||t>16)throw new Error("unable to decrypt data");var r=-1;for(;++r<t;)if(e[r+(16-t)]!==t)throw new Error("unable to decrypt data");if(16===t)return;return e.slice(0,16-t)}(this._mode.decrypt(this,e));if(e)throw new Error("data not multiple of block length")},p.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},l.prototype.add=function(e){this.cache=c.concat([this.cache,e])},l.prototype.get=function(e){var t;if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t;return null},l.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=function(e,t){var r=n[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var i=s(t,!1,r.key,r.iv);return u(e,i.key,i.iv)},t.createDecipheriv=u},71494:(e,t,r)=>{var i=r(45),c=r(62422),n=r(89509).Buffer,a=r(25969),h=r(71027),o=r(74497),s=r(13048);function p(e,t,r){h.call(this),this._cache=new u,this._cipher=new o.AES(t),this._prev=n.from(r),this._mode=e,this._autopadding=!0}r(35717)(p,h),p.prototype._update=function(e){var t,r;this._cache.add(e);for(var i=[];t=this._cache.get();)r=this._mode.encrypt(this,t),i.push(r);return n.concat(i)};var l=n.alloc(16,16);function u(){this.cache=n.allocUnsafe(0)}function f(e,t,r){var h=i[e.toLowerCase()];if(!h)throw new TypeError("invalid suite type");if("string"==typeof t&&(t=n.from(t)),t.length!==h.key/8)throw new TypeError("invalid key length "+t.length);if("string"==typeof r&&(r=n.from(r)),"GCM"!==h.mode&&r.length!==h.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===h.type?new a(h.module,t,r):"auth"===h.type?new c(h.module,t,r):new p(h.module,t,r)}p.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e;if(!e.equals(l))throw this._cipher.scrub(),new Error("data not multiple of block length")},p.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},u.prototype.add=function(e){this.cache=n.concat([this.cache,e])},u.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16);return this.cache=this.cache.slice(16),e}return null},u.prototype.flush=function(){for(var e=16-this.cache.length,t=n.allocUnsafe(e),r=-1;++r<e;)t.writeUInt8(e,r);return n.concat([this.cache,t])},t.createCipheriv=f,t.createCipher=function(e,t){var r=i[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var c=s(t,!1,r.key,r.iv);return f(e,c.key,c.iv)}},83288:(e,t,r)=>{var i=r(89509).Buffer,c=i.alloc(16,0);function n(e){var t=i.allocUnsafe(16);return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function a(e){this.h=e,this.state=i.alloc(16,0),this.cache=i.allocUnsafe(0)}a.prototype.ghash=function(e){for(var t=-1;++t<e.length;)this.state[t]^=e[t];this._multiply()},a.prototype._multiply=function(){for(var e,t,r,i=[(e=this.h).readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)],c=[0,0,0,0],a=-1;++a<128;){for(0!=(this.state[~~(a/8)]&1<<7-a%8)&&(c[0]^=i[0],c[1]^=i[1],c[2]^=i[2],c[3]^=i[3]),r=0!=(1&i[3]),t=3;t>0;t--)i[t]=i[t]>>>1|(1&i[t-1])<<31;i[0]=i[0]>>>1,r&&(i[0]=i[0]^225<<24)}this.state=n(c)},a.prototype.update=function(e){var t;for(this.cache=i.concat([this.cache,e]);this.cache.length>=16;)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},a.prototype.final=function(e,t){return this.cache.length&&this.ghash(i.concat([this.cache,c],16)),this.ghash(n([0,e,0,t])),this.state},e.exports=a},20685:e=>{e.exports=function(e){for(var t,r=e.length;r--;){if(255!==(t=e.readUInt8(r))){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}},25292:(e,t,r)=>{var i=r(67295);t.encrypt=function(e,t){var r=i(t,e._prev);return e._prev=e._cipher.encryptBlock(r),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var c=e._cipher.decryptBlock(t);return i(c,r)}},86311:(e,t,r)=>{var i=r(89509).Buffer,c=r(67295);function n(e,t,r){var n=t.length,a=c(t,e._cache);return e._cache=e._cache.slice(n),e._prev=i.concat([e._prev,r?t:a]),a}t.encrypt=function(e,t,r){for(var c,a=i.allocUnsafe(0);t.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=i.allocUnsafe(0)),!(e._cache.length<=t.length)){a=i.concat([a,n(e,t,r)]);break}c=e._cache.length,a=i.concat([a,n(e,t.slice(0,c),r)]),t=t.slice(c)}return a}},21510:(e,t,r)=>{var i=r(89509).Buffer;function c(e,t,r){for(var i,c,a=-1,h=0;++a<8;)i=t&1<<7-a?128:0,h+=(128&(c=e._cipher.encryptBlock(e._prev)[0]^i))>>a%8,e._prev=n(e._prev,r?i:c);return h}function n(e,t){var r=e.length,c=-1,n=i.allocUnsafe(e.length);for(e=i.concat([e,i.from([t])]);++c<r;)n[c]=e[c]<<1|e[c+1]>>7;return n}t.encrypt=function(e,t,r){for(var n=t.length,a=i.allocUnsafe(n),h=-1;++h<n;)a[h]=c(e,t[h],r);return a}},71964:(e,t,r)=>{var i=r(89509).Buffer;function c(e,t,r){var c=e._cipher.encryptBlock(e._prev)[0]^t;return e._prev=i.concat([e._prev.slice(1),i.from([r?t:c])]),c}t.encrypt=function(e,t,r){for(var n=t.length,a=i.allocUnsafe(n),h=-1;++h<n;)a[h]=c(e,t[h],r);return a}},96009:(e,t,r)=>{var i=r(67295),c=r(89509).Buffer,n=r(20685);function a(e){var t=e._cipher.encryptBlockRaw(e._prev);return n(e._prev),t}t.encrypt=function(e,t){var r=Math.ceil(t.length/16),n=e._cache.length;e._cache=c.concat([e._cache,c.allocUnsafe(16*r)]);for(var h=0;h<r;h++){var o=a(e),s=n+16*h;e._cache.writeUInt32BE(o[0],s+0),e._cache.writeUInt32BE(o[1],s+4),e._cache.writeUInt32BE(o[2],s+8),e._cache.writeUInt32BE(o[3],s+12)}var p=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),i(t,p)}},11084:(e,t)=>{t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},45:(e,t,r)=>{var i={ECB:r(11084),CBC:r(25292),CFB:r(86311),CFB8:r(71964),CFB1:r(21510),OFB:r(18861),CTR:r(96009),GCM:r(96009)},c=r(55415);for(var n in c)c[n].module=i[c[n].mode];e.exports=c},55415:e=>{"use strict";e.exports=JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')},18861:(e,t,r)=>{var i=r(48764).Buffer,c=r(67295);function n(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}t.encrypt=function(e,t){for(;e._cache.length<t.length;)e._cache=i.concat([e._cache,n(e)]);var r=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),c(t,r)}},25969:(e,t,r)=>{var i=r(74497),c=r(89509).Buffer,n=r(71027);function a(e,t,r,a){n.call(this),this._cipher=new i.AES(t),this._prev=c.from(r),this._cache=c.allocUnsafe(0),this._secCache=c.allocUnsafe(0),this._decrypt=a,this._mode=e}r(35717)(a,n),a.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},a.prototype._final=function(){this._cipher.scrub()},e.exports=a}}]);
//# sourceMappingURL=browserify-aes.js.map