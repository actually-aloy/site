(function () {
'use strict';

const S = {
  back: ['Back', 'بازگشت'],
  title: ["Aloy's Tools", 'ابزارهای آلوی'],
  sub: ['Small tools that run entirely in your browser. No uploads, no accounts, no ads.', 'ابزارهای کوچیکی که کامل توی مرورگر خودت اجرا میشن. بدون آپلود، بدون اکانت، بدون تبلیغ.'],
  search: ['Search tools…', 'جستجوی ابزار…'],
  private: ['Everything runs on your device. Your files and text are never sent anywhere.', 'همه‌چیز روی دستگاه خودت اجرا میشه. فایل‌ها و متن‌هات هیچ‌جا فرستاده نمیشن.'],
  hubIntro: ['Pick a tool from the menu or start with one of these.', 'یه ابزار از منو انتخاب کن یا با یکی از اینا شروع کن.'],
  noResults: ['Nothing matches that search.', 'چیزی با این جستجو پیدا نشد.'],
  g_img: ['Images', 'تصویر'],
  g_dev: ['Developer', 'برنامه‌نویسی'],
  g_daily: ['Everyday', 'روزمره'],
  n_compress: ['Image compressor', 'فشرده‌ساز تصویر'],
  d_compress: ['Shrink photos and resize them. Pick the quality, drop the files, download.', 'حجم عکس‌ها رو کم کن و اندازه‌شون رو تغییر بده. کیفیت رو انتخاب کن، فایل‌ها رو بنداز، دانلود کن.'],
  k_compress: ['compress resize shrink optimize photo image jpg jpeg webp png size reduce فشرده کاهش حجم عکس تصویر تغییر اندازه', ''],
  n_convert: ['Format converter', 'مبدل فرمت'],
  d_convert: ['Convert between PNG, JPG and WebP, or turn an SVG into a PNG.', 'بین PNG و JPG و WebP تبدیل کن یا یه SVG رو به PNG تبدیل کن.'],
  k_convert: ['convert format png jpg jpeg webp svg raster image تبدیل فرمت عکس', ''],
  n_json: ['JSON and Base64', 'JSON و Base64'],
  d_json: ['Format, validate and minify JSON. Encode and decode Base64.', 'JSON رو مرتب، اعتبارسنجی و فشرده کن. Base64 رو کدگذاری و کدگشایی کن.'],
  k_json: ['json format validate minify pretty base64 encode decode beautify ساختار اعتبارسنجی بیس۶۴ کدگذاری', ''],
  n_qr: ['QR code', 'کد QR'],
  d_qr: ['Make QR codes for links, Wi-Fi and contacts, or scan one with your camera.', 'برای لینک، وای‌فای و مخاطب کد QR بساز یا با دوربین یکی رو اسکن کن.'],
  k_qr: ['qr code generator scanner camera wifi barcode کیوآر اسکن بارکد', ''],
  n_password: ['Password generator', 'رمز عبور ساز'],
  d_password: ['Strong random passwords with a strength meter.', 'رمز عبور قوی و تصادفی، همراه با نمایشگر قدرت.'],
  k_password: ['password generator strength random secure رمز عبور تصادفی قدرت', ''],
  n_prices: ['Price charts', 'نمودار قیمت'],
  d_prices: ['Free-market prices for the dollar, euro, tether, gold and coins. Always up to date, with history.', 'قیمت بازار آزاد دلار، یورو، تتر، طلا و سکه. همیشه به‌روز، با نمودار تاریخچه.'],
  k_prices: ['price chart dollar usd euro rial toman gold coin tether usdt exchange rate قیمت نمودار دلار یورو تتر طلا سکه ریال تومان', ''],
  gCur: ['Currency', 'ارز'],
  gGold: ['Gold and coins', 'طلا و سکه'],
  prUsd: ['Dollar', 'دلار'],
  prEur: ['Euro', 'یورو'],
  prUsdt: ['Tether', 'تتر'],
  prGold: ['Gold 18K (1 g)', 'طلا ۱۸ (گرم)'],
  prMes: ['Mesghal', 'مثقال طلا'],
  prCoin: ['Emami coin', 'سکه امامی'],
  prHalf: ['Half coin', 'نیم سکه'],
  prQuarter: ['Quarter coin', 'ربع سکه'],
  prToman: ['Toman', 'تومان'],
  prRial: ['Rial', 'ریال'],
  prAll: ['All', 'همه'],
  prHigh: ['High', 'بیشترین'],
  prLow: ['Low', 'کمترین'],
  prUpdated: ['Updated', 'آخرین بروزرسانی'],
  prLoading: ['Loading prices…', 'در حال دریافت قیمت…'],
  prFail: ['Could not load prices. Check your connection and try again.', 'قیمت‌ها دریافت نشد. اینترنتت رو چک کن و دوباره امتحان کن.'],
  prNote: ['Free-market prices from TGJU, collected by the open iran-market dataset every 30 minutes. For information only. Check before any trade.', 'قیمت‌های بازار آزاد از TGJU، جمع‌آوری‌شده توسط دیتاست باز iran-market هر ۳۰ دقیقه. فقط برای اطلاع. قبل از هر معامله بررسی کن.'],
  prStale: ['This price may be out of date.', 'ممکنه این قیمت قدیمی باشه.'],
  n_units: ['Unit converter', 'مبدل واحد'],
  d_units: ['Length, weight, temperature, area, volume, speed, time, data and more.', 'طول، وزن، دما، مساحت، حجم، سرعت، زمان، داده و بیشتر.'],
  k_units: ['unit converter length weight mass temperature area volume speed time data energy pressure مبدل واحد طول وزن دما', ''],
  copy: ['Copy', 'کپی'],
  copied: ['Copied', 'کپی شد'],
  copyFail: ['Could not copy', 'کپی نشد'],
  clear: ['Clear', 'پاک کردن'],
  paste: ['Paste', 'چسباندن'],
  swap: ['Swap', 'جابه‌جایی'],
  input: ['Input', 'ورودی'],
  output: ['Output', 'خروجی'],
  generate: ['Generate', 'بساز'],
  compression: ['Compression', 'فشرده‌سازی'],
  lvBest: ['Best', 'بهترین'],
  lvBal: ['Balanced', 'متعادل'],
  lvSmall: ['Smallest', 'کوچک‌ترین'],
  lvNote: ['Balanced is right for most photos. Files keep their format.', 'حالت متعادل برای بیشتر عکس‌ها مناسبه. فرمت فایل‌ها عوض نمیشه.'],
  jpgNote: ['JPG has no transparency, so converting it to PNG or WebP keeps the background. It does not remove it.', 'JPG شفافیت نداره، برای همین تبدیلش به PNG یا WebP پس‌زمینه رو نگه می‌داره و حذفش نمی‌کنه.'],
  noGain: ['Already optimal', 'از قبل بهینه‌ست'],
  camera: ['Camera', 'دوربین'],
  sameFmt: ['Already in this format. Pick a different one.', 'همین الان توی این فرمته. یه فرمت دیگه انتخاب کن.'],
  pngNote: ['PNG is lossless, so there is no compression level. Lower the size to make it smaller, or switch it to WebP or JPG in the Format converter.', 'PNG بی‌افته، برای همین سطح فشرده‌سازی نداره. اندازه رو کم کن تا کوچیک‌تر بشه، یا توی مبدل فرمت به WebP یا JPG عوضش کن.'],
  format: ['Format', 'فرمت'],
  quality: ['Quality', 'کیفیت'],
  resize: ['Resize', 'تغییر اندازه'],
  rsOrig: ['Keep size', 'همون اندازه'],
  rsFit: ['Fit within', 'جا شدن در'],
  rsPct: ['Scale %', 'درصد'],
  maxW: ['Max width (px)', 'حداکثر عرض (px)'],
  maxH: ['Max height (px)', 'حداکثر ارتفاع (px)'],
  fitNote: ['The image keeps its proportions and is never enlarged. Leave one box empty to limit only the other.', 'نسبت تصویر حفظ میشه و بزرگ‌تر نمیشه. یکی از خونه‌ها رو خالی بذار تا فقط اون یکی محدود بشه.'],
  scale: ['Scale', 'مقیاس'],
  exifNote: ['Photo metadata such as location and camera info is removed.', 'متادیتای عکس مثل موقعیت و مشخصات دوربین حذف میشه.'],
  dropB: ['Choose images', 'تصویرها رو انتخاب کن'],
  dropT: ['or drag them here. You can also paste.', 'یا بکشون اینجا. میتونی پیست هم کنی.'],
  dropImg: ['JPG, PNG, WebP, GIF, BMP, AVIF. Many at once.', 'JPG و PNG و WebP و GIF و BMP و AVIF. چندتا با هم.'],
  dropConv: ['Images and SVG files. Many at once.', 'تصویر و فایل SVG. چندتا با هم.'],
  dlZip: ['Download all (.zip)', 'دانلود همه (ZIP)'],
  dl: ['Download', 'دانلود'],
  remove: ['Remove', 'حذف'],
  working: ['Working…', 'در حال پردازش…'],
  failed: ['Could not read this file', 'این فایل خونده نشد'],
  saved: ['saved', 'کمتر'],
  larger: ['larger', 'بزرگ‌تر'],
  sumFiles: ['files', 'فایل'],
  sumTotal: ['Total', 'مجموع'],
  convTo: ['Convert to', 'تبدیل به'],
  svgScale: ['SVG output size', 'اندازه خروجی SVG'],
  svgNote: ['SVG is vector, so you pick how large the image should be.', 'SVG برداریه، پس خودت انتخاب میکنی تصویر چقدر بزرگ باشه.'],
  bg: ['Background', 'پس‌زمینه'],
  bgNone: ['Transparent', 'شفاف'],
  bgWhite: ['White', 'سفید'],
  bgBlack: ['Black', 'مشکی'],
  bgNote: ['JPG cannot be transparent, so it always gets a white background unless you choose black.', 'JPG شفافیت نداره، پس همیشه پس‌زمینه سفید میگیره مگر اینکه مشکی انتخاب کنی.'],
  sortKeys: ['Sort keys', 'مرتب‌سازی کلیدها'],
  sample: ['Sample', 'نمونه'],
  minify: ['Minify', 'فشرده'],
  useAsInput: ['Use as input', 'استفاده به‌عنوان ورودی'],
  jsonPh: ['Paste JSON here…', 'JSON رو اینجا بچسبون…'],
  jEmpty: ['Paste some JSON to check it.', 'یه JSON بچسبون تا بررسی بشه.'],
  jValid: ['Valid JSON', 'JSON معتبره'],
  jInvalid: ['Invalid JSON', 'JSON نامعتبره'],
  jLine: ['line', 'خط'],
  jCol: ['column', 'ستون'],
  jBytes: ['bytes', 'بایت'],
  jKeys: ['keys', 'کلید'],
  jItems: ['items', 'آیتم'],
  jObject: ['object', 'آبجکت'],
  jArray: ['array', 'آرایه'],
  jDepth: ['depth', 'عمق'],
  encode: ['Encode', 'کدگذاری'],
  decode: ['Decode', 'کدگشایی'],
  urlSafe: ['URL-safe', 'امن برای URL'],
  fileToB64: ['File to Base64', 'فایل به Base64'],
  dlFile: ['Download file', 'دانلود فایل'],
  bEmpty: ['Type or paste text to convert.', 'متنی بنویس یا بچسبون تا تبدیل بشه.'],
  bOkEnc: ['Encoded as UTF-8', 'با UTF-8 کدگذاری شد'],
  bOkDec: ['Decoded', 'کدگشایی شد'],
  bBad: ['This is not valid Base64.', 'این Base64 معتبر نیست.'],
  bBinary: ['The data is binary, not text. Download it as a file.', 'داده باینریه نه متن. به‌صورت فایل دانلودش کن.'],
  bFile: ['Encoded file', 'فایل کدگذاری شد'],
  tPick: ['Picker and palette', 'انتخابگر و پالت'],
  tContrast: ['Contrast checker', 'بررسی کنتراست'],
  eyedrop: ['Pick from screen', 'برداشتن از صفحه'],
  scheme: ['Palette type', 'نوع پالت'],
  sComp: ['Complementary', 'مکمل'],
  sAnalog: ['Analogous', 'مجاور'],
  sTriad: ['Triadic', 'سه‌تایی'],
  sSplit: ['Split', 'مکمل شکسته'],
  sTetra: ['Tetradic', 'چهارتایی'],
  sMono: ['Shades', 'سایه‌ها'],
  sScale: ['Scale', 'طیف'],
  palHint: ['Click a swatch to copy its hex code.', 'روی یه رنگ کلیک کن تا کد hex کپی بشه.'],
  copyCss: ['Copy as CSS', 'کپی به‌صورت CSS'],
  copyJson: ['Copy as JSON', 'کپی به‌صورت JSON'],
  fg: ['Text color', 'رنگ متن'],
  bgc: ['Background color', 'رنگ پس‌زمینه'],
  fixIt: ['Suggest a passing text color', 'پیشنهاد رنگ متن مناسب'],
  gAA: ['AA normal text', 'AA متن معمولی'],
  gAAL: ['AA large text', 'AA متن بزرگ'],
  gAAA: ['AAA normal text', 'AAA متن معمولی'],
  gAAAL: ['AAA large text', 'AAA متن بزرگ'],
  gUI: ['UI components', 'اجزای رابط'],
  pass: ['Pass', 'قبول'],
  fail: ['Fail', 'رد'],
  vGreat: ['Excellent contrast', 'کنتراست عالی'],
  vGood: ['Good contrast', 'کنتراست خوب'],
  vOk: ['Fine for large text only', 'فقط برای متن بزرگ مناسبه'],
  vBad: ['Poor contrast, hard to read', 'کنتراست ضعیف، خوندنش سخته'],
  sampleL: ['Large sample text', 'متن نمونه بزرگ'],
  sampleN: ['This is how normal text looks with these two colors.', 'متن معمولی با این دو رنگ اینطوری دیده میشه.'],
  tGen: ['Generate', 'ساخت'],
  tScan: ['Scan', 'اسکن'],
  qText: ['Text or link', 'متن یا لینک'],
  qContact: ['Contact', 'مخاطب'],
  qContent: ['Content', 'محتوا'],
  qPh: ['Type a link or any text…', 'یه لینک یا هر متنی بنویس…'],
  wSsid: ['Network name', 'نام شبکه'],
  wPass: ['Password', 'رمز'],
  wOpen: ['None', 'بدون رمز'],
  wHidden: ['Hidden network', 'شبکه مخفی'],
  cName: ['Full name', 'نام کامل'],
  cPhone: ['Phone', 'تلفن'],
  cEmail: ['Email', 'ایمیل'],
  ecc: ['Error correction', 'تصحیح خطا'],
  size: ['Size', 'اندازه'],
  fgc: ['Code color', 'رنگ کد'],
  dlPng: ['Download PNG', 'دانلود PNG'],
  dlSvg: ['Download SVG', 'دانلود SVG'],
  copyImg: ['Copy image', 'کپی تصویر'],
  qOk: ['Ready. Version {v}, {n} modules.', 'آماده‌ست. نسخه {v}، {n} ماژول.'],
  qEmpty: ['Enter something to make a code.', 'چیزی وارد کن تا کد ساخته بشه.'],
  qTooLong: ['That is too long for a QR code. Shorten it or lower the error correction.', 'این برای کد QR خیلی بلنده. کوتاهش کن یا تصحیح خطا رو کمتر کن.'],
  qLowContrast: ['Low contrast. Scanners may fail, use a darker code on a lighter background.', 'کنتراست کمه. ممکنه اسکنر نخونه، کد تیره روی پس‌زمینه روشن بذار.'],
  camOff: ['Camera is off', 'دوربین خاموشه'],
  camStart: ['Start camera', 'روشن کردن دوربین'],
  camStop: ['Stop camera', 'خاموش کردن دوربین'],
  scanImg: ['Scan from image', 'اسکن از تصویر'],
  scanNote: ['Camera access needs your permission. Frames are processed on this device only.', 'دسترسی به دوربین نیاز به اجازه‌ی تو داره. تصویرها فقط روی همین دستگاه پردازش میشن.'],
  result: ['Result', 'نتیجه'],
  openLink: ['Open link', 'باز کردن لینک'],
  sIdle: ['Point the camera at a QR code.', 'دوربین رو روی یه کد QR بگیر.'],
  sFound: ['Code found', 'کد پیدا شد'],
  sNone: ['No QR code found in that image.', 'کد QR‌ای توی این تصویر پیدا نشد.'],
  sDenied: ['Could not open the camera. Check the permission or use an image instead.', 'دوربین باز نشد. دسترسی رو بررسی کن یا از تصویر استفاده کن.'],
  sLoading: ['Loading the scanner…', 'در حال بارگذاری اسکنر…'],
  yourText: ['Your text', 'متن تو'],
  phosphor: ['Phosphor color', 'رنگ فسفر'],
  font: ['Font', 'فونت'],
  fontSize: ['Font size', 'اندازه فونت'],
  glow: ['Glow', 'درخشش'],
  scanlines: ['Scanlines', 'خطوط اسکن'],
  vignette: ['Vignette', 'تیرگی لبه‌ها'],
  curve: ['Screen curve', 'انحنای صفحه'],
  cursor: ['Blinking cursor', 'مکان‌نمای چشمک‌زن'],
  flicker: ['Flicker', 'سوسو'],
  tImage: ['Image', 'تصویر'],
  cssNote: ['The live preview above uses exactly this code. Real screen curvature needs an image, CSS only fakes the rounded corners.', 'پیش‌نمایش بالا دقیقاً از همین کد استفاده می‌کنه. انحنای واقعی صفحه فقط توی تصویر ممکنه، CSS فقط گوشه‌ها رو گرد نشون میده.'],
  gType: ['Type', 'نوع'],
  gLinear: ['Linear', 'خطی'],
  gRadial: ['Radial', 'شعاعی'],
  gConic: ['Conic', 'مخروطی'],
  angle: ['Angle', 'زاویه'],
  stops: ['Color stops', 'نقاط رنگی'],
  addStop: ['Add stop', 'افزودن رنگ'],
  presets: ['Presets', 'پیش‌تنظیم‌ها'],
  random: ['Random gradient', 'گرادیان تصادفی'],
  addLayer: ['Add layer', 'افزودن لایه'],
  layer: ['Layer', 'لایه'],
  radius: ['Corner radius', 'گردی گوشه'],
  backdrop: ['Backdrop', 'پس‌زمینه'],
  bdLight: ['Light', 'روشن'],
  bdDark: ['Dark', 'تیره'],
  bdPink: ['Pink', 'صورتی'],
  inset: ['Inset', 'داخلی'],
  offX: ['X offset', 'جابه‌جایی X'],
  offY: ['Y offset', 'جابه‌جایی Y'],
  blur: ['Blur', 'محو'],
  spread: ['Spread', 'گسترش'],
  opacity: ['Opacity', 'شفافیت'],
  tPass: ['Password', 'رمز عبور'],
  tCheck: ['Check strength', 'بررسی قدرت'],
  length: ['Length', 'طول'],
  pLower: ['Lowercase (a-z)', 'حروف کوچک (a-z)'],
  pUpper: ['Uppercase (A-Z)', 'حروف بزرگ (A-Z)'],
  pDigits: ['Numbers (0-9)', 'عدد (0-9)'],
  pSymbols: ['Symbols (!@#$)', 'نماد (!@#$)'],
  pAmbig: ['Avoid look-alikes (l 1 I O 0)', 'بدون حروف شبیه هم (l 1 I O 0)'],
  words: ['Words', 'تعداد کلمه'],
  separator: ['Separator', 'جداکننده'],
  capitalize: ['Capitalize words', 'حرف اول بزرگ'],
  addNumber: ['Add a number', 'افزودن عدد'],
  typePw: ['Type a password to test', 'یه رمز بنویس تا بسنجمش'],
  show: ['Show', 'نمایش'],
  hide: ['Hide', 'پنهان'],
  checkNote: ['This is an estimate and runs only in this tab. Nothing you type is stored or sent. Do not rely on it for passwords you already use elsewhere.', 'این فقط یه تخمینه و فقط توی همین تب اجرا میشه. چیزی که تایپ میکنی ذخیره یا ارسال نمیشه. به رمزهایی که جای دیگه استفاده کردی اعتماد نکن.'],
  entropy: ['bits of entropy', 'بیت آنتروپی'],
  crack: ['Offline guessing time', 'زمان حدس زدن آفلاین'],
  sVeryWeak: ['Very weak', 'خیلی ضعیف'],
  sWeak: ['Weak', 'ضعیف'],
  sFair: ['Fair', 'متوسط'],
  sStrong: ['Strong', 'قوی'],
  sVeryStrong: ['Excellent', 'عالی'],
  common: ['This is a very common password.', 'این یه رمز خیلی رایجه.'],
  instant: ['instantly', 'آنی'],
  seconds: ['seconds', 'ثانیه'],
  minutes: ['minutes', 'دقیقه'],
  hours: ['hours', 'ساعت'],
  days: ['days', 'روز'],
  years: ['years', 'سال'],
  centuries: ['centuries', 'قرن'],
  forever: ['longer than the age of the universe', 'بیشتر از عمر جهان'],
  from: ['From', 'از'],
  to: ['To', 'به'],
  allUnits: ['All conversions', 'همه تبدیل‌ها'],
  c_length: ['Length', 'طول'],
  c_mass: ['Weight', 'وزن'],
  c_temp: ['Temperature', 'دما'],
  c_area: ['Area', 'مساحت'],
  c_volume: ['Volume', 'حجم'],
  c_speed: ['Speed', 'سرعت'],
  c_time: ['Time', 'زمان'],
  c_data: ['Data', 'داده'],
  c_energy: ['Energy', 'انرژی'],
  c_pressure: ['Pressure', 'فشار']
};

const L = { en: 0, fa: 1 };
let lang = 'fa';
try { lang = localStorage.getItem('lang') === 'en' ? 'en' : 'fa'; } catch (e) {}

const t = k => (S[k] ? S[k][L[lang]] || S[k][0] : k);
const $ = id => document.getElementById(id);
const qa = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICON = {
  prices: '<path d="M3 20V4"/><path d="M3 20h18"/><path d="m6 15 4-5 3 3 6-8"/>',
  compress: '<path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3"/><path d="m9 9 6 6M15 11v4h-4"/>',
  convert: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m4 17 5-5 4 4 3-3 4 4"/>',
  json: '<path d="M8 4C6 4 5.5 5 5.5 6.5v2C5.5 10 4.5 11 3 12c1.500 1 2.500 2 2.500 3.500v2C5.500 19 6 20 8 20M16 4c2 0 2.500 1 2.500 2.500v2c0 1.500 1 2.500 2.500 3.500-1.500 1-2.500 2-2.500 3.500v2c0 1.500-.5 2.500-2.500 2.500"/><circle cx="12" cy="12" r=".9" fill="currentColor"/>',
  qr: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><path d="M14 14h2.500v2.500M20.500 14v.01M14 20.500h.01M17 20.500h3.500v-3"/>',
  color: '<path d="M12 3.500c-4.700 0-8.500 3.500-8.500 7.800 0 3.200 2.300 5.200 4.800 5.200h1.200c1 0 1.500.7 1.500 1.500 0 1.200.8 2 1.800 2 4.300 0 7.700-3.500 7.700-8 0-4.600-3.800-8.500-8.500-8.500z"/><circle cx="8" cy="11" r="1" fill="currentColor"/><circle cx="12" cy="7.500" r="1" fill="currentColor"/><circle cx="16.500" cy="10" r="1" fill="currentColor"/>',
  gradient: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 15c4-1 6-6 9-6s5 3 9 2" opacity=".7"/><path d="M7 4v16M12 4v16M17 4v16" opacity=".35"/>',
  shadow: '<rect x="4" y="4" width="12" height="12" rx="3"/><path d="M19 8v9a2 2 0 0 1-2 2H8"/>',
  retro: '<rect x="3" y="4" width="18" height="13" rx="3"/><path d="M8 20h8M12 17v3"/><path d="m7 9 2.500 2L7 13M12 13h4"/>',
  password: '<rect x="4.500" y="10.500" width="15" height="10" rx="3"/><path d="M8 10.500V8a4 4 0 0 1 8 0v2.500"/><circle cx="12" cy="15.500" r="1.200" fill="currentColor"/>',
  units: '<path d="M4 17 17 4l3 3L7 20z"/><path d="m8 13 2 2M11 10l2 2M14 7l2 2"/>'
};
const svgOf = id => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[id] + '</svg>';

const TOOLS = [
  { id: 'compress', g: 'img' },
  { id: 'convert', g: 'img' },
  { id: 'json', g: 'dev' },
  { id: 'qr', g: 'dev' },
  { id: 'prices', g: 'daily' },
  { id: 'password', g: 'daily' },
  { id: 'units', g: 'daily' }
];
const GROUPS = ['daily', 'img', 'dev'];

let toastTimer = 0;
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast(t('copied'));
    return true;
  } catch (e) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      toast(ok ? t('copied') : t('copyFail'));
      return ok;
    } catch (e2) {
      toast(t('copyFail'));
      return false;
    }
  }
}

function saveBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function fmtBytes(n) {
  if (n < 1024) return n + ' B';
  if (n < 1048576) return (n / 1024).toFixed(n < 10240 ? 1 : 0) + ' KB';
  return (n / 1048576).toFixed(2) + ' MB';
}

function bindRange(id, outId, f, cb) {
  const el = $(id);
  const o = $(outId);
  const upd = () => { o.textContent = f ? f(el.value) : el.value; };
  el.addEventListener('input', () => { upd(); cb && cb(el.value); });
  upd();
}

let ddCount = 0;
function dropdown(sel) {
  const id = 'dd' + (++ddCount);
  const root = document.createElement('div');
  root.className = 'dd';
  root.innerHTML = '<button type="button" class="dd-btn" aria-haspopup="listbox" aria-expanded="false"><span class="dd-val"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><ul class="dd-menu" role="listbox" tabindex="-1"></ul>';
  sel.classList.add('dd-native');
  sel.tabIndex = -1;
  sel.setAttribute('aria-hidden', 'true');
  sel.parentNode.insertBefore(root, sel.nextSibling);
  const btn = root.querySelector('.dd-btn');
  const val = root.querySelector('.dd-val');
  const menu = root.querySelector('.dd-menu');
  const lab = sel.id && document.querySelector('label[for="' + sel.id + '"]');
  if (lab) { lab.addEventListener('click', e => { e.preventDefault(); btn.focus(); }); }
  let active = 0;
  const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  const isOpen = () => root.classList.contains('open');
  function paint() {
    const opts = Array.from(sel.options);
    menu.innerHTML = opts.map((o, i) => '<li role="option" id="' + id + '-o' + i + '" data-i="' + i + '" class="dd-opt" aria-selected="' + (i === sel.selectedIndex) + '"><span>' + esc(o.textContent) + '</span>' + check + '</li>').join('');
    val.textContent = opts[sel.selectedIndex] ? opts[sel.selectedIndex].textContent : '';
  }
  function setActive(i) {
    const n = sel.options.length;
    active = Math.max(0, Math.min(n - 1, i));
    qa('.dd-opt', menu).forEach((el, k) => el.classList.toggle('active', k === active));
    const el = menu.children[active];
    if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
  }
  function open() {
    if (isOpen()) return;
    const r = btn.getBoundingClientRect();
    const below = window.innerHeight - r.bottom;
    root.classList.toggle('up', below < Math.min(menu.scrollHeight, 268) + 16 && r.top > below);
    root.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    setActive(sel.selectedIndex);
    menu.focus({ preventScroll: true });
  }
  function close(refocus) {
    if (!isOpen()) return;
    root.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    if (refocus) btn.focus({ preventScroll: true });
  }
  function choose(i) {
    const changed = sel.selectedIndex !== i;
    sel.selectedIndex = i;
    paint();
    close(true);
    if (changed) sel.dispatchEvent(new Event('change', { bubbles: true }));
  }
  btn.addEventListener('mousedown', e => { if (isOpen()) e.preventDefault(); });
  btn.addEventListener('click', () => { isOpen() ? close(true) : open(); });
  btn.addEventListener('keydown', e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); } });
  menu.addEventListener('mousedown', e => e.preventDefault());
  menu.addEventListener('mouseover', e => { const li = e.target.closest('.dd-opt'); if (li) setActive(+li.dataset.i); });
  menu.addEventListener('click', e => { const li = e.target.closest('.dd-opt'); if (li) choose(+li.dataset.i); });
  menu.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); setActive(active + 1); break;
      case 'ArrowUp': e.preventDefault(); setActive(active - 1); break;
      case 'Home': e.preventDefault(); setActive(0); break;
      case 'End': e.preventDefault(); setActive(sel.options.length - 1); break;
      case 'Enter':
      case ' ': e.preventDefault(); choose(active); break;
      case 'Escape': e.preventDefault(); close(true); break;
      case 'Tab': close(false); break;
    }
  });
  menu.addEventListener('blur', e => { if (!root.contains(e.relatedTarget)) close(false); });
  document.addEventListener('pointerdown', e => { if (!root.contains(e.target)) close(false); });
  hooks.leave.push(() => close(false));
  sel._dd = { refresh: paint };
  paint();
  return sel._dd;
}

const pillPlacers = [];
function pillify(box) {
  if (!window.ResizeObserver) return () => {};
  const pill = document.createElement('span');
  pill.className = 'pill';
  pill.setAttribute('aria-hidden', 'true');
  box.insertBefore(pill, box.firstChild);
  box.classList.add('has-pill');
  const place = () => {
    const on = box.querySelector('button.on');
    if (!on || !box.offsetWidth) { pill.style.opacity = '0'; return; }
    pill.style.width = on.offsetWidth + 'px';
    pill.style.height = on.offsetHeight + 'px';
    pill.style.transform = 'translate(' + on.offsetLeft + 'px,' + on.offsetTop + 'px)';
    pill.style.opacity = '1';
    if (!box.classList.contains('ready')) requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add('ready')));
  };
  new ResizeObserver(place).observe(box);
  pillPlacers.push(place);
  place();
  return place;
}
function placePills() { pillPlacers.forEach(f => f()); }
if (document.fonts && document.fonts.ready) document.fonts.ready.then(placePills);

function bindSeg(id, onChange) {
  const box = $(id);
  const place = pillify(box);
  const get = () => {
    const on = box.querySelector('button.on');
    return on ? on.dataset.v : null;
  };
  box.addEventListener('click', e => {
    const b = e.target.closest('button[data-v]');
    if (!b) return;
    qa('button', box).forEach(x => x.classList.toggle('on', x === b));
    place();
    onChange && onChange(b.dataset.v);
  });
  return { get, set(v) { qa('button', box).forEach(x => x.classList.toggle('on', x.dataset.v === String(v))); place(); } };
}
function bindTabs(root, onTab) {
  const bar = root.querySelector('[data-tabs]');
  const place = pillify(bar);
  bar.addEventListener('click', e => {
    const b = e.target.closest('button[data-tab]');
    if (!b) return;
    qa('button', bar).forEach(x => x.classList.toggle('on', x === b));
    place();
    qa('[data-pane]', root).forEach(p => { p.hidden = p.dataset.pane !== b.dataset.tab; });
    onTab && onTab(b.dataset.tab);
  });
}

function wireCopyButtons() {
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-copy]');
    if (!b) return;
    const src = $(b.dataset.copy);
    copyText(src.value !== undefined ? src.value : src.textContent);
  });
}

function wireDrop(dropId, inputId, onFiles) {
  const drop = $(dropId);
  const inp = $(inputId);
  inp.addEventListener('change', () => { onFiles(Array.from(inp.files)); inp.value = ''; });
  ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', e => onFiles(Array.from(e.dataTransfer.files)));
  drop.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inp.click(); } });
}

const hooks = { lang: [], enter: [], leave: [] };
const T = { S, t, $, qa, esc, ICON, svgOf, toast, copyText, saveBlob, fmtBytes, bindSeg, bindRange, bindTabs, wireDrop, dropdown, hooks, getLang: () => lang };
window.TT = T;

function applyStatic() {
  qa('[data-i]').forEach(el => { el.textContent = t(el.dataset.i); });
  qa('[data-ph]').forEach(el => { el.placeholder = t(el.dataset.ph); });
  qa('[data-t]').forEach(el => { el.title = t(el.dataset.t); el.setAttribute('aria-label', t(el.dataset.t)); });
  qa('[data-ic]').forEach(el => { el.innerHTML = svgOf(el.dataset.ic); });
}

function toolMatches(tool, q) {
  if (!q) return true;
  const hay = [S['n_' + tool.id][0], S['n_' + tool.id][1], S['d_' + tool.id][0], S['d_' + tool.id][1], S['k_' + tool.id][0]].join(' ').toLowerCase();
  return q.toLowerCase().split(/\s+/).every(w => hay.includes(w));
}

let current = 'hub';
let query = '';

let menuHl = null;
let menuFirst = true;
function placeMenuHl() {
  const list = $('menu-list');
  if (!menuHl) {
    menuHl = document.createElement('span');
    menuHl.className = 'menu-hl';
    menuHl.setAttribute('aria-hidden', 'true');
  }
  if (menuHl.parentNode !== list) list.appendChild(menuHl);
  const on = list.querySelector('.menu-item.on');
  if (!on) { menuHl.style.opacity = '0'; return; }
  menuHl.style.height = on.offsetHeight + 'px';
  menuHl.style.transform = 'translateY(' + on.offsetTop + 'px)';
  menuHl.style.opacity = '1';
  if (!list.classList.contains('ready')) requestAnimationFrame(() => requestAnimationFrame(() => list.classList.add('ready')));
  let sc = list;
  while (sc && sc !== document.body && !(sc.scrollWidth > sc.clientWidth + 2 && /(auto|scroll)/.test(getComputedStyle(sc).overflowX))) sc = sc.parentElement;
  if (sc && sc !== document.body) {
    const a = on.getBoundingClientRect();
    const b = sc.getBoundingClientRect();
    sc.scrollTo({ left: sc.scrollLeft + (a.left - b.left) - (b.width - a.width) / 2, behavior: menuFirst ? 'auto' : 'smooth' });
  }
}

function renderMenu() {
  const list = $('menu-list');
  const items = TOOLS.filter(x => toolMatches(x, query));
  let html = '';
  GROUPS.forEach(g => {
    const inG = items.filter(x => x.g === g);
    if (!inG.length) return;
    html += '<div class="menu-group">' + esc(t('g_' + g)) + '</div>';
    inG.forEach(x => {
      html += '<a class="menu-item' + (x.id === current ? ' on' : '') + '" title="' + esc(t('d_' + x.id)) + '" href="#' + x.id + '" data-id="' + x.id + '"><span class="mi-ic">' + svgOf(x.id) + '</span><span class="mi-t"><b>' + esc(t('n_' + x.id)) + '</b><small>' + esc(t('d_' + x.id)) + '</small></span></a>';
    });
  });
  list.innerHTML = html || '<div class="menu-empty">' + esc(t('noResults')) + '</div>';
  list.classList.toggle('intro', menuFirst);
  if (menuFirst) { menuFirst = false; setTimeout(() => list.classList.remove('intro'), 900); }
  placeMenuHl();
}
function renderHub() {
  $('hub-grid').innerHTML = GROUPS.flatMap(g => TOOLS.filter(x => x.g === g)).map(x => '<a class="hub-card" href="#' + x.id + '"><span class="mi-ic">' + svgOf(x.id) + '</span><h3>' + esc(t('n_' + x.id)) + '</h3><p>' + esc(t('d_' + x.id)) + '</p></a>').join('');
}

function show(id) {
  const prev = current;
  current = TOOLS.some(x => x.id === id) ? id : 'hub';
  if (prev !== current) hooks.leave.forEach(f => f(prev));
  qa('.view').forEach(v => { v.hidden = v.id !== 'v-' + current; });
  document.title = current === 'hub' ? t('title') : t('n_' + current) + ' · ' + t('title');
  renderMenu();
  hooks.enter.forEach(f => f(current));
  if (prev !== current && window.innerWidth <= 960) $('stage').scrollIntoView({ block: 'start' });
}

function applyLanguage(next) {
  lang = next;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  applyStatic();
  renderMenu();
  renderHub();
  document.title = current === 'hub' ? t('title') : t('n_' + current) + ' · ' + t('title');
  hooks.lang.forEach(f => f());
  placePills();
}

T.init = function () {
  wireCopyButtons();
  $('lang-toggle').addEventListener('click', () => { $('lang-toggle').blur(); applyLanguage(lang === 'en' ? 'fa' : 'en'); });
  const q = $('q');
  q.addEventListener('input', () => { query = q.value.trim(); renderMenu(); });
  q.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const first = TOOLS.find(x => toolMatches(x, query));
      if (first) { location.hash = first.id; q.blur(); }
    } else if (e.key === 'Escape') {
      q.value = ''; query = ''; renderMenu(); q.blur();
    } else if (e.key === 'ArrowDown') {
      const a = $('menu-list').querySelector('.menu-item');
      if (a) { e.preventDefault(); a.focus(); }
    }
  });
  $('menu-list').addEventListener('keydown', e => {
    const items = qa('.menu-item', $('menu-list'));
    const i = items.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowDown' && items[i + 1]) { e.preventDefault(); items[i + 1].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); (items[i - 1] || q).focus(); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) { e.preventDefault(); q.focus(); q.select(); }
  });
  window.addEventListener('hashchange', () => show(location.hash.slice(1)));
  applyLanguage(lang);
  show(location.hash.slice(1));
};
})();
(function () {
'use strict';
const { t, $, qa, esc, saveBlob, fmtBytes, bindSeg, bindRange, wireDrop, hooks } = window.TT;

const crcTable = (() => {
  const tbl = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    tbl[n] = c >>> 0;
  }
  return tbl;
})();

function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

async function makeZip(files) {
  const enc = new TextEncoder();
  const parts = [];
  const central = [];
  let offset = 0;
  const u16 = n => new Uint8Array([n & 255, (n >>> 8) & 255]);
  const u32 = n => new Uint8Array([n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255]);
  const cat = arr => { const o = new Uint8Array(arr.reduce((a, b) => a + b.length, 0)); let p = 0; arr.forEach(b => { o.set(b, p); p += b.length; }); return o; };
  for (const f of files) {
    const name = enc.encode(f.name);
    const data = new Uint8Array(await f.blob.arrayBuffer());
    const crc = crc32(data);
    const local = cat([u32(0x04034b50), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), name]);
    parts.push(local, data);
    central.push(cat([u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(0), u16(0), u16(0x21), u32(crc), u32(data.length), u32(data.length), u16(name.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), name]));
    offset += local.length + data.length;
  }
  const cd = cat(central);
  const end = cat([u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(cd.length), u32(offset), u16(0)]);
  return new Blob([...parts, cd, end], { type: 'application/zip' });
}

const EXT = { jpeg: 'jpg', webp: 'webp', png: 'png' };
const MIME = { jpeg: 'image/jpeg', webp: 'image/webp', png: 'image/png' };

function canvasBlob(canvas, type, q) {
  return new Promise(res => canvas.toBlob(res, type, q));
}

function baseName(n) {
  const i = n.lastIndexOf('.');
  return (i > 0 ? n.slice(0, i) : n).replace(/[\\/:*?"<>|]/g, '_');
}

function uniqueName(name, used) {
  let out = name;
  let i = 1;
  while (used.has(out)) {
    const dot = name.lastIndexOf('.');
    out = name.slice(0, dot) + '-' + i + name.slice(dot);
    i++;
  }
  used.add(out);
  return out;
}

function makeList(cfg) {
  const list = $(cfg.list);
  const sum = $(cfg.sum);
  const items = [];
  let runId = 0;

  function row(it) {
    let sz;
    if (it.state === 'busy') sz = esc(t('working'));
    else if (it.state === 'skip') sz = esc(t('sameFmt'));
    else if (it.state === 'err') sz = esc(t('failed'));
    else {
      const d = it.file.size ? Math.round((1 - it.blob.size / it.file.size) * 100) : 0;
      const tag = !cfg.showSavings ? '' : it.blob === it.file ? '<b>' + esc(t('noGain')) + '</b>' : d >= 0 ? '<b><bdi dir="ltr">-' + d + '%</bdi> ' + esc(t('saved')) + '</b>' : '<b class="worse"><bdi dir="ltr">+' + (-d) + '%</bdi> ' + esc(t('larger')) + '</b>';
      sz = '<bdi>' + fmtBytes(it.file.size) + ' → ' + fmtBytes(it.blob.size) + (it.w ? ' · ' + it.w + '×' + it.h : '') + '</bdi> ' + tag;
    }
    return '<div class="file' + (it.state === 'err' ? ' err' : it.state === 'skip' ? ' skip' : it.state === 'busy' ? ' busy' : '') + (it.seen ? '' : ' in') + '" data-id="' + it.id + '"><img class="th" alt="" src="' + it.thumb + '"><div style="min-width:0"><div class="nm" dir="auto">' + esc(it.file.name) + '</div><div class="sz">' + sz + '</div></div><div class="act">' +
      (it.state === 'done' ? '<button type="button" class="btn sm primary" data-act="dl">' + esc(t('dl')) + '</button>' : '') +
      '<button type="button" class="btn sm" data-act="rm" aria-label="' + esc(t('remove')) + '">✕</button></div></div>';
  }

  function render() {
    list.innerHTML = items.map(row).join('');
    items.forEach(i => { i.seen = true; });
    const done = items.filter(i => i.state === 'done');
    if (cfg.onChange) cfg.onChange(items);
    const counted = items.filter(i => i.state !== 'skip');
    sum.hidden = !counted.length;
    if (!counted.length) return;
    const a = done.reduce((s, i) => s + i.file.size, 0);
    const b = done.reduce((s, i) => s + i.blob.size, 0);
    let txt = esc(counted.length + ' ' + t('sumFiles'));
    if (done.length && cfg.showSavings && a) {
      const d = Math.round((1 - b / a) * 100);
      txt += ' · <bdi dir="ltr">' + fmtBytes(a) + ' → ' + fmtBytes(b) + ' (' + (d >= 0 ? '-' : '+') + Math.abs(d) + '%)</bdi>';
    }
    $(cfg.sumt).innerHTML = txt;
    $(cfg.zip).disabled = !done.length;
  }
  hooks.lang.push(() => { if (cfg.onChange) cfg.onChange(items); });

  async function run(it, id) {
    it.state = 'busy';
    try {
      const out = await cfg.process(it.file, cfg.opts());
      if (id !== runId) return;
      it.blob = out.blob;
      it.w = out.w;
      it.h = out.h;
      it.name = out.name;
      it.state = 'done';
    } catch (e) {
      it.state = e && e.message === 'same' ? 'skip' : 'err';
    }
  }

  async function processAll() {
    const id = ++runId;
    items.forEach(i => { i.state = 'busy'; });
    render();
    for (const it of items) {
      if (id !== runId) return;
      await run(it, id);
      if (id === runId) render();
    }
  }

  function add(files) {
    const imgs = files.filter(f => cfg.accept(f));
    if (!imgs.length) return;
    imgs.forEach(f => {
      items.push({ id: Math.random().toString(36).slice(2), file: f, thumb: URL.createObjectURL(f), state: 'busy' });
    });
    processAll();
  }

  list.addEventListener('click', e => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const id = b.closest('.file').dataset.id;
    const idx = items.findIndex(i => i.id === id);
    if (idx < 0) return;
    if (b.dataset.act === 'rm') {
      const gone = items[idx];
      const el = b.closest('.file');
      const drop = () => {
        const k = items.indexOf(gone);
        if (k < 0) return;
        URL.revokeObjectURL(gone.thumb);
        items.splice(k, 1);
        render();
      };
      if (el && !matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.height = el.offsetHeight + 'px'; void el.offsetHeight; el.classList.add('leaving'); setTimeout(() => { el.classList.add('gone'); setTimeout(drop, 260); }, 190); } else drop();
    } else if (items[idx].blob) saveBlob(items[idx].blob, items[idx].name);
  });

  $(cfg.clear).addEventListener('click', () => {
    items.forEach(i => URL.revokeObjectURL(i.thumb));
    items.length = 0;
    runId++;
    render();
  });

  $(cfg.zip).addEventListener('click', async () => {
    const used = new Set();
    const files = items.filter(i => i.state === 'done').map(i => ({ name: uniqueName(i.name, used), blob: i.blob }));
    if (!files.length) return;
    if (files.length === 1) { saveBlob(files[0].blob, files[0].name); return; }
    saveBlob(await makeZip(files), 'images.zip');
  });

  hooks.lang.push(render);
  return { add, reprocess: () => { if (items.length) processAll(); } };
}

async function loadBitmap(file) {
  try {
    return await createImageBitmap(file, { imageOrientation: 'from-image' });
  } catch (e) {
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      img.src = url;
      await img.decode();
      return img;
    } finally {
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }
  }
}

const kindOf = f => {
  if (f.type === 'image/svg+xml' || /\.svg$/i.test(f.name)) return 'svg';
  if (f.type === 'image/jpeg' || /\.jpe?g$/i.test(f.name)) return 'jpeg';
  if (f.type === 'image/png' || /\.png$/i.test(f.name)) return 'png';
  if (f.type === 'image/webp' || /\.webp$/i.test(f.name)) return 'webp';
  return 'other';
};

const compressUi = (() => {
  let kinds = [];
  const lvl = bindSeg('c-lvl', () => tool.reprocess());
  const outFmt = file => ({ jpeg: 'jpeg', png: 'png', webp: 'webp' })[kindOf(file)] || 'webp';
  function syncOpts() {
    const onlyPng = kinds.length > 0 && kinds.every(k => k === 'png');
    $('c-qf').hidden = onlyPng;
    $('c-pngn').hidden = !onlyPng;
  }
  const rs = bindSeg('c-rs', v => {
    $('c-fitf').hidden = v !== 'fit';
    $('c-pctf').hidden = v !== 'pct';
    tool.reprocess();
  });
  let timer = 0;
  const later = () => { clearTimeout(timer); timer = setTimeout(() => tool.reprocess(), 250); };
  bindRange('c-pct', 'c-pcto', v => v + '%', later);
  $('c-w').addEventListener('input', later);
  $('c-h').addEventListener('input', later);

  const tool = makeList({
    list: 'c-list', sum: 'c-sum', sumt: 'c-sumt', zip: 'c-zip', clear: 'c-clear', showSavings: true,
    accept: f => /^image\//.test(f.type) || /\.(jpe?g|png|webp|gif|bmp|avif)$/i.test(f.name),
    onChange: items => { kinds = items.map(it => kindOf(it.file)); syncOpts(); },
    opts: () => ({ q: Number(lvl.get()), mode: rs.get(), w: Number($('c-w').value) || 0, h: Number($('c-h').value) || 0, pct: Number($('c-pct').value) / 100 }),
    async process(file, o) {
      const of = outFmt(file);
      const bmp = await loadBitmap(file);
      const sw = bmp.width || bmp.naturalWidth;
      const sh = bmp.height || bmp.naturalHeight;
      let k = 1;
      if (o.mode === 'pct') k = o.pct;
      else if (o.mode === 'fit' && (o.w || o.h)) k = Math.min(1, o.w ? o.w / sw : Infinity, o.h ? o.h / sh : Infinity);
      const w = Math.max(1, Math.round(sw * k));
      const h = Math.max(1, Math.round(sh * k));
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      if (of === 'jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w, h); }
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(bmp, 0, 0, w, h);
      if (bmp.close) bmp.close();
      let blob = await canvasBlob(c, MIME[of], o.q);
      if (!blob) throw new Error('encode');
      let name = baseName(file.name) + '-compressed.' + EXT[of];
      if (k === 1 && file.type === MIME[of] && blob.size >= file.size) { blob = file; name = file.name; }
      return { blob, w, h, name };
    }
  });
  wireDrop('c-drop', 'c-file', tool.add);
  return tool;
})();

const convertUi = (() => {
  const fmt = bindSeg('v-fmt', v => { $('v-qf').hidden = v === 'png'; syncBg(); tool.reprocess(); });
  const lvl = bindSeg('v-lvl', () => tool.reprocess());
  const sc = bindSeg('v-sc', () => tool.reprocess());
  const bg = bindSeg('v-bg', () => tool.reprocess());

  async function svgSize(file) {
    const text = await file.text();
    const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
    const el = doc.documentElement;
    let w = parseFloat(el.getAttribute('width'));
    let h = parseFloat(el.getAttribute('height'));
    const vb = (el.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
    if ((!w || !h) && vb.length === 4 && vb[2] > 0 && vb[3] > 0) { w = w || vb[2]; h = h || vb[3]; if (!el.getAttribute('width') && el.getAttribute('height')) w = vb[2] * (h / vb[3]); }
    if (!w || !h) { w = 512; h = 512; }
    if (!el.getAttribute('width') || !el.getAttribute('height')) { el.setAttribute('width', w); el.setAttribute('height', h); }
    return { w, h, text: new XMLSerializer().serializeToString(el) };
  }

  let hasAlpha = false;
  let hasJpg = false;
  function syncBg() {
    const jpg = fmt.get() === 'jpeg';
    $('v-bgf').hidden = !hasAlpha;
    $('v-jpgn').hidden = !(hasJpg && !jpg);
    $('v-bgnone').hidden = jpg;
    if (jpg && bg.get() === 'none') bg.set('#ffffff');
  }

  const tool = makeList({
    list: 'v-list', sum: 'v-sum', sumt: 'v-sumt', zip: 'v-zip', clear: 'v-clear', showSavings: false,
    accept: f => /^image\//.test(f.type) || /\.(jpe?g|png|webp|gif|bmp|avif|svg)$/i.test(f.name),
    onChange: items => {
      const kinds = items.map(it => kindOf(it.file));
      $('v-scf').hidden = !kinds.includes('svg');
      hasAlpha = kinds.some(k => k !== 'jpeg');
      hasJpg = kinds.includes('jpeg');
      syncBg();
    },
    opts: () => ({ fmt: fmt.get(), q: Number(lvl.get()), scale: Number(sc.get()), bg: bg.get() }),
    async process(file, o) {
      let src;
      let w;
      let h;
      const isSvg = kindOf(file) === 'svg';
      if (kindOf(file) === o.fmt) throw new Error('same');
      if (isSvg) {
        const s = await svgSize(file);
        const url = URL.createObjectURL(new Blob([s.text], { type: 'image/svg+xml' }));
        const img = new Image();
        img.src = url;
        try { await img.decode(); } catch (e) { URL.revokeObjectURL(url); throw e; }
        src = img;
        w = Math.round(s.w * o.scale);
        h = Math.round(s.h * o.scale);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      } else {
        src = await loadBitmap(file);
        w = src.width || src.naturalWidth;
        h = src.height || src.naturalHeight;
      }
      if (w * h > 120e6) throw new Error('big');
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      const fill = o.bg !== 'none' ? o.bg : o.fmt === 'jpeg' ? '#ffffff' : null;
      if (fill) { ctx.fillStyle = fill; ctx.fillRect(0, 0, w, h); }
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(src, 0, 0, w, h);
      if (src.close) src.close();
      const blob = await canvasBlob(c, MIME[o.fmt], o.q);
      if (!blob) throw new Error('encode');
      return { blob, w, h, name: baseName(file.name) + '.' + EXT[o.fmt] };
    }
  });
  wireDrop('v-drop', 'v-file', tool.add);
  $('v-qf').hidden = true;
  $('v-scf').hidden = true;
  $('v-bgf').hidden = true;
  $('v-jpgn').hidden = true;
  return tool;
})();

document.addEventListener('paste', e => {
  const cur = qa('.view').find(v => !v.hidden);
  if (!cur || (cur.id !== 'v-compress' && cur.id !== 'v-convert')) return;
  const files = Array.from(e.clipboardData ? e.clipboardData.files : []).filter(f => /^image\//.test(f.type));
  if (!files.length) return;
  e.preventDefault();
  (cur.id === 'v-compress' ? compressUi : convertUi).add(files);
});
})();
(function () {
'use strict';
const { t, $, qa, esc, copyText, saveBlob, fmtBytes, bindSeg, bindRange, bindTabs, dropdown, hooks, toast } = window.TT;

const jroot = $('v-json');
bindTabs(jroot);

const SAMPLE = '{"name":"Aloy","tools":["compress","json","qr"],"private":true,"stats":{"count":10,"ratio":0.75},"note":null}';
let jOutText = '';

function sortDeep(v) {
  if (Array.isArray(v)) return v.map(sortDeep);
  if (v && typeof v === 'object') {
    const o = {};
    Object.keys(v).sort().forEach(k => { o[k] = sortDeep(v[k]); });
    return o;
  }
  return v;
}

function depthOf(v) {
  if (v && typeof v === 'object') {
    const vals = Array.isArray(v) ? v : Object.values(v);
    return 1 + vals.reduce((m, x) => Math.max(m, depthOf(x)), 0);
  }
  return 0;
}

function errPos(msg, text) {
  let m = /position (\d+)/.exec(msg);
  if (m) {
    const pos = Number(m[1]);
    const before = text.slice(0, pos);
    return { line: before.split('\n').length, col: pos - before.lastIndexOf('\n') };
  }
  m = /line (\d+) column (\d+)/.exec(msg);
  if (m) return { line: Number(m[1]), col: Number(m[2]) };
  return null;
}

function setStat(id, cls, text) {
  const el = $(id);
  el.className = 'status t ' + cls;
  el.textContent = text;
}

function jsonRun(minify) {
  const text = $('j-in').value;
  if (!text.trim()) { setStat('j-stat', 'idle', t('jEmpty')); $('j-out').value = ''; $('j-info').textContent = ''; jOutText = ''; return; }
  try {
    let v = JSON.parse(text);
    if ($('j-sort').checked) v = sortDeep(v);
    const ind = jInd.get();
    const out = minify ? JSON.stringify(v) : JSON.stringify(v, null, ind === 'tab' ? '\t' : Number(ind));
    $('j-out').value = out;
    jOutText = out;
    setStat('j-stat', 'ok', '✓ ' + t('jValid'));
    const kind = Array.isArray(v) ? t('jArray') + ' · ' + v.length + ' ' + t('jItems') : v && typeof v === 'object' ? t('jObject') + ' · ' + Object.keys(v).length + ' ' + t('jKeys') : typeof v;
    $('j-info').textContent = kind + ' · ' + t('jDepth') + ' ' + depthOf(v) + ' · ' + new Blob([out]).size + ' ' + t('jBytes');
  } catch (e) {
    const p = errPos(String(e.message), text);
    setStat('j-stat', 'no', '✗ ' + t('jInvalid') + (p ? ' (' + t('jLine') + ' ' + p.line + ', ' + t('jCol') + ' ' + p.col + ')' : '') + ': ' + String(e.message).replace(/^JSON\.parse: /, ''));
    $('j-out').value = '';
    $('j-info').textContent = '';
    jOutText = '';
  }
}

const jInd = bindSeg('j-ind', () => jsonRun(false));
let jTimer = 0;
$('j-in').addEventListener('input', () => { clearTimeout(jTimer); jTimer = setTimeout(() => jsonRun(false), 180); });
$('j-sort').addEventListener('change', () => jsonRun(false));
$('j-min').addEventListener('click', () => jsonRun(true));
$('j-copy').addEventListener('click', () => { if (jOutText) copyText(jOutText); });
$('j-use').addEventListener('click', () => { if (jOutText) { $('j-in').value = jOutText; jsonRun(false); } });
$('j-clear').addEventListener('click', () => { $('j-in').value = ''; jsonRun(false); $('j-in').focus(); });
$('j-sample').addEventListener('click', () => { $('j-in').value = SAMPLE; jsonRun(false); });
$('j-paste').addEventListener('click', async () => {
  try { $('j-in').value = await navigator.clipboard.readText(); jsonRun(false); } catch (e) { $('j-in').focus(); }
});

let b64Bin = null;

function toB64(bytes, url) {
  let s = '';
  const CH = 0x8000;
  for (let i = 0; i < bytes.length; i += CH) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  let out = btoa(s);
  if (url) out = out.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return out;
}

function fromB64(str) {
  let s = str.replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
  if (/[^A-Za-z0-9+/=]/.test(s)) throw new Error('bad');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

let b64Ext = '';
function sniffExt(b) {
  const h = (n) => Array.from(b.slice(0, n)).map(x => x.toString(16).padStart(2, '0')).join('');
  const a = h(12);
  if (a.startsWith('89504e47')) return 'png';
  if (a.startsWith('ffd8ff')) return 'jpg';
  if (a.startsWith('47494638')) return 'gif';
  if (a.startsWith('25504446')) return 'pdf';
  if (a.startsWith('504b0304')) return 'zip';
  if (a.startsWith('1f8b')) return 'gz';
  if (a.startsWith('52494646') && a.slice(16, 24) === '57454250') return 'webp';
  if (a.startsWith('52494646') && a.slice(16, 24) === '57415645') return 'wav';
  if (a.startsWith('494433') || a.startsWith('fffb')) return 'mp3';
  if (a.slice(8, 16) === '66747970') return 'mp4';
  return '';
}

function b64Run() {
  const text = $('b-in').value;
  b64Bin = null;
  $('b-bin').hidden = true;
  if (!text) { $('b-out').value = ''; setStat('b-stat', 'idle', t('bEmpty')); return; }
  if (bMode.get() === 'enc') {
    $('b-out').value = toB64(new TextEncoder().encode(text), $('b-url').checked);
    setStat('b-stat', 'ok', '✓ ' + t('bOkEnc'));
    return;
  }
  try {
    const bytes = fromB64(text.replace(/^data:[^,]*,/, ''));
    let str = null;
    try { str = new TextDecoder('utf-8', { fatal: true }).decode(bytes); } catch (e) { str = null; }
    if (str === null || /[\u0000-\u0008\u000e-\u001f]/.test(str)) {
      b64Bin = bytes;
      $('b-out').value = '';
      b64Ext = sniffExt(bytes);
      $('b-bint').textContent = t('bBinary');
      $('b-binn').innerHTML = '<bdi dir="ltr">' + fmtBytes(bytes.length) + (b64Ext ? ' · .' + b64Ext : '') + '</bdi>';
      $('b-bin').hidden = false;
      setStat('b-stat', 'ok', '✓ ' + t('bOkDec'));
    } else {
      $('b-out').value = str;
      setStat('b-stat', 'ok', '✓ ' + t('bOkDec'));
    }
  } catch (e) {
    $('b-out').value = '';
    setStat('b-stat', 'no', '✗ ' + t('bBad'));
  }
}

const bMode = bindSeg('b-mode', b64Run);
$('b-in').addEventListener('input', b64Run);
$('b-url').addEventListener('change', b64Run);
$('b-copy').addEventListener('click', () => { if ($('b-out').value) copyText($('b-out').value); });
$('b-clear').addEventListener('click', () => { $('b-in').value = ''; b64Run(); });
$('b-swap').addEventListener('click', () => {
  const out = $('b-out').value;
  $('b-in').value = out;
  bMode.set(bMode.get() === 'enc' ? 'dec' : 'enc');
  b64Run();
});
$('b-dl').addEventListener('click', () => { if (b64Bin) saveBlob(new Blob([b64Bin]), 'decoded.' + (b64Ext || 'bin')); });
$('b-file').addEventListener('click', () => $('b-fileinp').click());
$('b-fileinp').addEventListener('change', async () => {
  const f = $('b-fileinp').files[0];
  $('b-fileinp').value = '';
  if (!f) return;
  const bytes = new Uint8Array(await f.arrayBuffer());
  bMode.set('enc');
  $('b-in').value = '';
  $('b-out').value = toB64(bytes, $('b-url').checked);
  setStat('b-stat', 'ok', '✓ ' + t('bFile') + ': ' + f.name + ' (' + fmtBytes(f.size) + ')');
});

hooks.lang.push(() => { jsonRun(false); b64Run(); });

const POOLS = { lo: 'abcdefghijklmnopqrstuvwxyz', up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', di: '0123456789', sy: '!@#$%^&*()-_=+[]{};:,.?/~' };
const AMBIG = /[l1IO0|]/g;

function rnd(n) {
  const lim = Math.floor(0x100000000 / n) * n;
  const buf = new Uint32Array(1);
  do { crypto.getRandomValues(buf); } while (buf[0] >= lim);
  return buf[0] % n;
}

function pick(str) { return str[rnd(str.length)]; }

function meter(el, bits) {
  const lvl = bits < 28 ? 0 : bits < 45 ? 1 : bits < 64 ? 2 : bits < 90 ? 3 : 4;
  const col = ['#ff7a8a', '#ffa86b', '#ffd36b', '#9be08a', '#5bcefa'][lvl];
  el.style.width = (12 + lvl * 22) + '%';
  el.style.background = col;
  return lvl;
}

function crackTime(bits) {
  const secs = Math.pow(2, bits) / 2 / 1e10;
  if (secs < 1) return t('instant');
  const units = [[60, 'seconds'], [60, 'minutes'], [24, 'hours'], [365, 'days'], [100, 'years']];
  let v = secs;
  for (const [div, name] of units) {
    if (v < div) return Math.round(v) + ' ' + t(name);
    v /= div;
  }
  if (v > 1e9) return t('forever');
  return (v >= 1e6 ? v.toExponential(1) : Math.round(v).toLocaleString('en')) + ' ' + t('centuries');
}

const LV = ['sVeryWeak', 'sWeak', 'sFair', 'sStrong', 'sVeryStrong'];
let pwText = '';
let pwBits = 0;

function genPassword() {
  const sets = [];
  [['p-lo', 'lo'], ['p-up', 'up'], ['p-di', 'di'], ['p-sy', 'sy']].forEach(([id, k]) => {
    if ($(id).checked) sets.push($('p-am').checked ? POOLS[k].replace(AMBIG, '') : POOLS[k]);
  });
  if (!sets.length) { $('p-lo').checked = true; return genPassword(); }
  const len = Number($('p-len').value);
  const all = sets.join('');
  const chars = sets.map(pick);
  while (chars.length < len) chars.push(pick(all));
  for (let i = chars.length - 1; i > 0; i--) { const j = rnd(i + 1); [chars[i], chars[j]] = [chars[j], chars[i]]; }
  pwText = chars.join('');
  pwBits = len * Math.log2(all.length);
  $('p-out').innerHTML = chars.map(c => /[0-9]/.test(c) ? '<span class="d">' + c + '</span>' : /[^A-Za-z0-9]/.test(c) ? '<span class="s">' + esc(c) + '</span>' : esc(c)).join('');
  const po = $('p-out');
  po.classList.remove('flash');
  void po.offsetWidth;
  po.classList.add('flash');
  paintPwInfo();
}

function paintPwInfo() {
  const lvl = meter($('p-meter'), pwBits);
  $('p-info').textContent = t(LV[lvl]) + ' · ' + Math.round(pwBits) + ' ' + t('entropy') + ' · ' + t('crack') + ': ' + crackTime(pwBits);
}

const COMMON = ['password', '123456', '12345678', 'qwerty', 'abc123', 'letmein', 'admin', 'welcome', 'iloveyou', 'monkey', 'dragon', '111111', 'password1', '123456789', '1234567890', 'qwerty123', '000000', '123123', 'football', 'baseball', 'sunshine', 'princess', 'trustno1', '1q2w3e4r', 'zaq12wsx', 'passw0rd', 'master', 'login', 'hello', 'freedom'];

function estimate(pw) {
  if (!pw) return { bits: 0, common: false };
  const lower = pw.toLowerCase();
  if (COMMON.includes(lower)) return { bits: Math.min(10, pw.length * 1.5), common: true };
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^A-Za-z0-9]/.test(pw)) pool += 30;
  if (/[^\x00-\x7f]/.test(pw)) pool += 60;
  const uniq = new Set(pw).size;
  let eff = pw.length * Math.log2(pool || 1);
  eff *= Math.min(1, 0.45 + uniq / pw.length / 1.8);
  const seq = (lower.match(/(abc|bcd|cde|def|123|234|345|456|567|678|789|qwe|wer|ert|asd|sdf|zxc)/g) || []).length;
  const rep = (pw.match(/(.)\1{2,}/g) || []).length;
  eff -= seq * 6 + rep * 8;
  if (/^[a-zA-Z]+\d{1,4}$/.test(pw)) eff -= 8;
  return { bits: Math.max(0, eff), common: false };
}

function paintCheck() {
  const pw = $('k-in').value;
  const el = $('k-stat');
  if (!pw) { meter($('k-meter'), 0); $('k-meter').style.width = '0'; el.className = 'status idle t'; el.textContent = ''; return; }
  const e = estimate(pw);
  const lvl = meter($('k-meter'), e.bits);
  el.className = 'status t ' + (lvl >= 3 ? 'ok' : lvl === 2 ? 'idle' : 'no');
  el.textContent = t(LV[lvl]) + ' · ' + Math.round(e.bits) + ' ' + t('entropy') + ' · ' + t('crack') + ': ' + crackTime(e.bits) + (e.common ? ' · ' + t('common') : '');
}

bindTabs($('v-password'));
bindRange('p-len', 'p-leno', null, genPassword);
['p-lo', 'p-up', 'p-di', 'p-sy', 'p-am'].forEach(id => $(id).addEventListener('change', genPassword));
$('p-new').addEventListener('click', genPassword);
$('p-copy').addEventListener('click', () => copyText(pwText));
$('k-in').addEventListener('input', paintCheck);
$('k-eye').addEventListener('click', () => {
  const i = $('k-in');
  i.type = i.type === 'password' ? 'text' : 'password';
  $('k-eye').textContent = t(i.type === 'password' ? 'show' : 'hide');
});
hooks.lang.push(() => {
  paintPwInfo();
  paintCheck();
  $('k-eye').textContent = t($('k-in').type === 'password' ? 'show' : 'hide');
});
genPassword();

const U = {
  length: { m: 1, u: [['mm', 0.001, 'millimeter', 'میلی‌متر'], ['cm', 0.01, 'centimeter', 'سانتی‌متر'], ['m', 1, 'meter', 'متر'], ['km', 1000, 'kilometer', 'کیلومتر'], ['in', 0.0254, 'inch', 'اینچ'], ['ft', 0.3048, 'foot', 'فوت'], ['yd', 0.9144, 'yard', 'یارد'], ['mi', 1609.344, 'mile', 'مایل'], ['nmi', 1852, 'nautical mile', 'مایل دریایی']], from: 'm', to: 'ft' },
  mass: { u: [['mg', 1e-6, 'milligram', 'میلی‌گرم'], ['g', 0.001, 'gram', 'گرم'], ['kg', 1, 'kilogram', 'کیلوگرم'], ['t', 1000, 'metric ton', 'تن'], ['oz', 0.028349523125, 'ounce', 'اونس'], ['lb', 0.45359237, 'pound', 'پوند'], ['st', 6.35029318, 'stone', 'استون']], from: 'kg', to: 'lb' },
  temp: { u: [['C', 0, 'Celsius', 'سلسیوس'], ['F', 0, 'Fahrenheit', 'فارنهایت'], ['K', 0, 'Kelvin', 'کلوین']], from: 'C', to: 'F' },
  area: { u: [['mm2', 1e-6, 'square millimeter', 'میلی‌متر مربع'], ['cm2', 1e-4, 'square centimeter', 'سانتی‌متر مربع'], ['m2', 1, 'square meter', 'متر مربع'], ['ha', 10000, 'hectare', 'هکتار'], ['km2', 1e6, 'square kilometer', 'کیلومتر مربع'], ['in2', 0.00064516, 'square inch', 'اینچ مربع'], ['ft2', 0.09290304, 'square foot', 'فوت مربع'], ['ac', 4046.8564224, 'acre', 'ایکر'], ['mi2', 2589988.110336, 'square mile', 'مایل مربع']], from: 'm2', to: 'ft2' },
  volume: { u: [['ml', 0.001, 'milliliter', 'میلی‌لیتر'], ['l', 1, 'liter', 'لیتر'], ['m3', 1000, 'cubic meter', 'متر مکعب'], ['tsp', 0.00492892159375, 'teaspoon (US)', 'قاشق چای‌خوری'], ['tbsp', 0.01478676478125, 'tablespoon (US)', 'قاشق غذاخوری'], ['floz', 0.0295735295625, 'fluid ounce (US)', 'اونس مایع'], ['cup', 0.2365882365, 'cup (US)', 'فنجان'], ['gal', 3.785411784, 'gallon (US)', 'گالن'], ['bbl', 158.987294928, 'oil barrel', 'بشکه نفت']], from: 'l', to: 'gal' },
  speed: { u: [['ms', 1, 'meter/second', 'متر بر ثانیه'], ['kmh', 1 / 3.6, 'kilometer/hour', 'کیلومتر بر ساعت'], ['mph', 0.44704, 'mile/hour', 'مایل بر ساعت'], ['kn', 0.514444444, 'knot', 'گره'], ['fts', 0.3048, 'foot/second', 'فوت بر ثانیه'], ['mach', 340.29, 'Mach', 'ماخ']], from: 'kmh', to: 'mph' },
  time: { u: [['ms', 0.001, 'millisecond', 'میلی‌ثانیه'], ['s', 1, 'second', 'ثانیه'], ['min', 60, 'minute', 'دقیقه'], ['h', 3600, 'hour', 'ساعت'], ['d', 86400, 'day', 'روز'], ['wk', 604800, 'week', 'هفته'], ['mo', 2629746, 'month (avg)', 'ماه (میانگین)'], ['y', 31556952, 'year', 'سال']], from: 'h', to: 'min' },
  data: { u: [['bit', 0.125, 'bit', 'بیت'], ['B', 1, 'byte', 'بایت'], ['KB', 1e3, 'kilobyte', 'کیلوبایت'], ['MB', 1e6, 'megabyte', 'مگابایت'], ['GB', 1e9, 'gigabyte', 'گیگابایت'], ['TB', 1e12, 'terabyte', 'ترابایت'], ['KiB', 1024, 'kibibyte', 'کیبی‌بایت'], ['MiB', 1048576, 'mebibyte', 'مبی‌بایت'], ['GiB', 1073741824, 'gibibyte', 'گیبی‌بایت'], ['TiB', 1099511627776, 'tebibyte', 'تبی‌بایت']], from: 'MB', to: 'MiB' },
  energy: { u: [['J', 1, 'joule', 'ژول'], ['kJ', 1000, 'kilojoule', 'کیلوژول'], ['cal', 4.184, 'calorie', 'کالری'], ['kcal', 4184, 'kilocalorie', 'کیلوکالری'], ['Wh', 3600, 'watt-hour', 'وات‌ساعت'], ['kWh', 3600000, 'kilowatt-hour', 'کیلووات‌ساعت'], ['BTU', 1055.05585262, 'BTU', 'بی‌تی‌یو'], ['eV', 1.602176634e-19, 'electronvolt', 'الکترون‌ولت']], from: 'kcal', to: 'kJ' },
  pressure: { u: [['Pa', 1, 'pascal', 'پاسکال'], ['kPa', 1000, 'kilopascal', 'کیلوپاسکال'], ['bar', 100000, 'bar', 'بار'], ['atm', 101325, 'atmosphere', 'اتمسفر'], ['psi', 6894.757293168, 'psi', 'پوند بر اینچ مربع'], ['mmHg', 133.322387415, 'mmHg', 'میلی‌متر جیوه']], from: 'bar', to: 'psi' }
};
const CATS = Object.keys(U);
let cat = 'length';

const unitLabel = u => (window.TT.getLang() === 'fa' ? u[3] : u[2]) + ' (' + u[0].replace('2', '²').replace('3', '³') + ')';

function convertVal(v, from, to) {
  if (cat === 'temp') {
    const c = from === 'C' ? v : from === 'F' ? (v - 32) * 5 / 9 : v - 273.15;
    return to === 'C' ? c : to === 'F' ? c * 9 / 5 + 32 : c + 273.15;
  }
  const f = U[cat].u.find(x => x[0] === from)[1];
  const g = U[cat].u.find(x => x[0] === to)[1];
  return v * f / g;
}

function fmtNum(n) {
  if (!isFinite(n)) return '—';
  if (n === 0) return '0';
  const a = Math.abs(n);
  if (a >= 1e15 || a < 1e-6) return n.toExponential(6).replace(/\.?0+e/, 'e');
  const s = Number(n.toPrecision(10)).toString();
  const [i, d] = s.split('.');
  return i.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (d ? '.' + d : '');
}

const ddFrom = dropdown($('u-from'));
const ddTo = dropdown($('u-to'));
let lastRes = '';

function fillUnits() {
  const opts = U[cat].u.map(u => '<option value="' + u[0] + '">' + esc(unitLabel(u)) + '</option>').join('');
  const f = $('u-from').value;
  const tt = $('u-to').value;
  $('u-from').innerHTML = opts;
  $('u-to').innerHTML = opts;
  $('u-from').value = U[cat].u.some(u => u[0] === f) && f ? f : U[cat].from;
  $('u-to').value = U[cat].u.some(u => u[0] === tt) && tt ? tt : U[cat].to;
  ddFrom.refresh();
  ddTo.refresh();
}

function paintUnits(animate) {
  const raw = $('u-val').value.replace(/,/g, '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).trim();
  const v = raw === '' || raw === '-' ? NaN : Number(raw);
  const from = $('u-from').value;
  const to = $('u-to').value;
  const res = isNaN(v) ? '—' : fmtNum(convertVal(v, from, to));
  const out = $('u-res');
  out.textContent = res;
  if (res !== lastRes) {
    lastRes = res;
    out.classList.remove('flash');
    void out.offsetWidth;
    out.classList.add('flash');
  }
  $('u-table').innerHTML = isNaN(v) ? '' : U[cat].u.map((u, i) => {
    const r = fmtNum(convertVal(v, from, u[0]));
    return '<button type="button" class="cell' + (animate === true ? ' in' : '') + '" style="--i:' + i + '" data-v="' + esc(r.replace(/,/g, '')) + '"><small>' + esc(unitLabel(u)) + '</small><b>' + esc(r) + '</b></button>';
  }).join('');
}

const catSeg = (() => {
  $('u-cat').innerHTML = CATS.map(c => '<button type="button" data-v="' + c + '"' + (c === cat ? ' class="on"' : '') + '></button>').join('');
  return bindSeg('u-cat', v => {
    cat = v;
    $('u-from').value = '';
    $('u-to').value = '';
    fillUnits();
    paintUnits(true);
  });
})();

function paintCats() {
  qa('button', $('u-cat')).forEach(b => { b.textContent = t('c_' + b.dataset.v); });
}

$('u-val').addEventListener('input', () => paintUnits());
$('u-from').addEventListener('change', () => paintUnits());
$('u-to').addEventListener('change', () => paintUnits());
$('u-swap').addEventListener('click', () => {
  const a = $('u-from').value;
  $('u-from').value = $('u-to').value;
  $('u-to').value = a;
  ddFrom.refresh();
  ddTo.refresh();
  const sw = $('u-swap');
  sw.classList.remove('spin');
  void sw.offsetWidth;
  sw.classList.add('spin');
  paintUnits();
});
$('u-table').addEventListener('click', e => {
  const c = e.target.closest('.cell');
  if (!c) return;
  copyText(c.dataset.v);
  c.classList.remove('copied');
  void c.offsetWidth;
  c.classList.add('copied');
});
$('u-res').addEventListener('click', () => { const v = $('u-res').textContent.replace(/,/g, ''); if (v && v !== '—') copyText(v); });
hooks.lang.push(() => { paintCats(); fillUnits(); paintUnits(); });
hooks.enter.push(id => { if (id === 'units') paintUnits(true); });
})();
(function () {
'use strict';
const { t, $, qa, esc, copyText, saveBlob, bindSeg, bindRange, bindTabs, hooks, toast, svgOf } = window.TT;

const qroot = $('v-qr');
let qScanTab = false;
bindTabs(qroot, tab => { qScanTab = tab === 'scan'; if (!qScanTab) stopCam(); });

const qType = bindSeg('q-type', v => {
  qa('[data-qf]', qroot).forEach(el => { el.hidden = el.dataset.qf !== v; });
  qrPaint();
});
const qSec = bindSeg('q-sec', () => qrPaint());
const qEcc = bindSeg('q-ecc', () => qrPaint());
let qModel = null;
let qLastOk = false;

function wifiEsc(s) { return String(s).replace(/([\;,:"])/g, '\\$1'); }

function qrContent() {
  const ty = qType.get();
  if (ty === 'wifi') {
    const ssid = $('q-ssid').value;
    if (!ssid) return '';
    const sec = qSec.get();
    return 'WIFI:T:' + sec + ';S:' + wifiEsc(ssid) + ';' + (sec === 'nopass' ? '' : 'P:' + wifiEsc($('q-wpass').value) + ';') + ($('q-hid').checked ? 'H:true;' : '') + ';';
  }
  if (ty === 'contact') {
    const n = $('q-cn').value.trim();
    const p = $('q-cp').value.trim();
    const e = $('q-ce').value.trim();
    if (!n && !p && !e) return '';
    return 'BEGIN:VCARD\nVERSION:3.0\n' + (n ? 'FN:' + n + '\nN:' + n + ';;;;\n' : '') + (p ? 'TEL:' + p + '\n' : '') + (e ? 'EMAIL:' + e + '\n' : '') + 'END:VCARD';
  }
  return $('q-text').value;
}

function lumHex(h) {
  const n = parseInt(h.slice(1), 16);
  const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f((n >> 16) & 255) + 0.7152 * f((n >> 8) & 255) + 0.0722 * f(n & 255);
}

function qrPaint() {
  const stat = $('q-stat');
  const text = qrContent();
  const cvs = $('q-canvas');
  const ctx = cvs.getContext('2d');
  qLastOk = false;
  if (!text) {
    qModel = null;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    stat.className = 'status idle t';
    stat.textContent = t('qEmpty');
    return;
  }
  try {
    qrcode.stringToBytes = s => Array.from(new TextEncoder().encode(s));
    const q = qrcode(0, qEcc.get());
    q.addData(text, 'Byte');
    q.make();
    qModel = q;
  } catch (e) {
    qModel = null;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    stat.className = 'status no t';
    stat.textContent = t('qTooLong');
    return;
  }
  const n = qModel.getModuleCount();
  const target = Number($('q-size').value);
  const cell = Math.max(1, Math.floor(target / (n + 8)));
  const px = cell * (n + 8);
  cvs.width = px;
  cvs.height = px;
  ctx.fillStyle = $('q-bg').value;
  ctx.fillRect(0, 0, px, px);
  ctx.fillStyle = $('q-fg').value;
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qModel.isDark(r, c)) ctx.fillRect((c + 4) * cell, (r + 4) * cell, cell, cell);
  qLastOk = true;
  const low = lumHex($('q-fg').value) > lumHex($('q-bg').value) || (Math.max(lumHex($('q-fg').value), lumHex($('q-bg').value)) + 0.05) / (Math.min(lumHex($('q-fg').value), lumHex($('q-bg').value)) + 0.05) < 3;
  stat.className = 'status t ' + (low ? 'no' : 'ok');
  stat.textContent = low ? t('qLowContrast') : t('qOk').replace('{v}', (n - 17) / 4).replace('{n}', n) + ' · \u2066' + px + ' px\u2069';
}

function qrSvg() {
  const n = qModel.getModuleCount();
  let d = '';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qModel.isDark(r, c)) d += 'M' + (c + 4) + ' ' + (r + 4) + 'h1v1h-1z';
  const s = n + 8;
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + s + ' ' + s + '" width="' + Number($('q-size').value) + '" height="' + Number($('q-size').value) + '" shape-rendering="crispEdges"><rect width="' + s + '" height="' + s + '" fill="' + $('q-bg').value + '"/><path d="' + d + '" fill="' + $('q-fg').value + '"/></svg>';
}

['q-text', 'q-ssid', 'q-wpass', 'q-cn', 'q-cp', 'q-ce'].forEach(id => $(id).addEventListener('input', qrPaint));
['q-hid', 'q-fg', 'q-bg'].forEach(id => $(id).addEventListener('input', qrPaint));
bindRange('q-size', 'q-sizeo', v => v + ' px', qrPaint);
$('q-png').addEventListener('click', () => { if (qLastOk) $('q-canvas').toBlob(b => saveBlob(b, 'qr-code.png'), 'image/png'); });
$('q-svg').addEventListener('click', () => { if (qLastOk) saveBlob(new Blob([qrSvg()], { type: 'image/svg+xml' }), 'qr-code.svg'); });
$('q-copyimg').addEventListener('click', () => {
  if (!qLastOk) return;
  $('q-canvas').toBlob(async b => {
    try { await navigator.clipboard.write([new ClipboardItem({ 'image/png': b })]); toast(t('copied')); } catch (e) { toast(t('copyFail')); }
  }, 'image/png');
});

let stream = null;
let scanRaf = 0;
let detector = null;
let jsqrLoading = null;
const work = document.createElement('canvas');
const wctx = work.getContext('2d', { willReadFrequently: true });

function loadJsQR() {
  if (window.jsQR) return Promise.resolve();
  if (!jsqrLoading) {
    jsqrLoading = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'qr-scan.js';
      s.onload = res;
      s.onerror = () => { jsqrLoading = null; rej(new Error('jsqr')); };
      document.head.appendChild(s);
    });
  }
  return jsqrLoading;
}

async function getDetector() {
  if (detector !== null) return detector;
  detector = false;
  try {
    if ('BarcodeDetector' in window) {
      const f = await BarcodeDetector.getSupportedFormats();
      if (f.includes('qr_code')) detector = new BarcodeDetector({ formats: ['qr_code'] });
    }
  } catch (e) { detector = false; }
  return detector;
}

async function decodeSource(src, w, h) {
  const det = await getDetector();
  if (det) {
    try {
      const r = await det.detect(src);
      if (r.length) return r[0].rawValue;
    } catch (e) {}
  }
  await loadJsQR();
  const maxW = 900;
  const k = Math.min(1, maxW / w);
  work.width = Math.max(1, Math.round(w * k));
  work.height = Math.max(1, Math.round(h * k));
  wctx.drawImage(src, 0, 0, work.width, work.height);
  const d = wctx.getImageData(0, 0, work.width, work.height);
  const r = jsQR(d.data, d.width, d.height, { inversionAttempts: 'attemptBoth' });
  return r ? r.data : null;
}

function showResult(text) {
  $('s-out').value = text;
  const st = $('s-stat');
  st.className = 'status ok t';
  st.textContent = '✓ ' + t('sFound');
  const a = $('s-open');
  if (/^https?:\/\//i.test(text.trim())) { a.href = text.trim(); a.hidden = false; } else a.hidden = true;
}

function stopCam() {
  cancelAnimationFrame(scanRaf);
  if (stream) stream.getTracks().forEach(tr => tr.stop());
  stream = null;
  const v = $('s-video');
  v.srcObject = null;
  v.hidden = true;
  $('s-frame').hidden = true;
  $('s-ph').hidden = false;
  $('s-start').hidden = false;
  $('s-stop').hidden = true;
}

async function startCam() {
  const st = $('s-stat');
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
  } catch (e) {
    st.className = 'status no t';
    st.textContent = t('sDenied');
    return;
  }
  const v = $('s-video');
  v.srcObject = stream;
  v.hidden = false;
  await v.play().catch(() => {});
  $('s-frame').hidden = false;
  $('s-ph').hidden = true;
  $('s-start').hidden = true;
  $('s-stop').hidden = false;
  st.className = 'status idle t';
  st.textContent = t('sIdle');
  let last = 0;
  let busy = false;
  const loop = async ts => {
    if (!stream) return;
    if (!busy && ts - last > 140 && v.videoWidth) {
      busy = true;
      last = ts;
      try {
        const res = await decodeSource(v, v.videoWidth, v.videoHeight);
        if (res) { showResult(res); stopCam(); busy = false; return; }
      } catch (e) {}
      busy = false;
    }
    scanRaf = requestAnimationFrame(loop);
  };
  scanRaf = requestAnimationFrame(loop);
}

$('s-start').addEventListener('click', startCam);
$('s-stop').addEventListener('click', stopCam);
$('s-img').addEventListener('change', async () => {
  const f = $('s-img').files[0];
  $('s-img').value = '';
  if (!f) return;
  const st = $('s-stat');
  st.className = 'status idle t';
  st.textContent = t('sLoading');
  try {
    const bmp = await createImageBitmap(f);
    const res = await decodeSource(bmp, bmp.width, bmp.height);
    if (res) showResult(res);
    else { st.className = 'status no t'; st.textContent = t('sNone'); }
  } catch (e) {
    st.className = 'status no t';
    st.textContent = t('sNone');
  }
});
$('s-copy').addEventListener('click', () => { if ($('s-out').value) copyText($('s-out').value); });
$('s-video').hidden = true;

hooks.leave.push(() => stopCam());
document.addEventListener('visibilitychange', () => { if (document.hidden) stopCam(); });
hooks.lang.push(() => { qrPaint(); if (!$('s-out').value) { $('s-stat').className = 'status idle t'; $('s-stat').textContent = t('sIdle'); } });
qrPaint();

})();
(function () {
'use strict';
const { t, $, esc, bindSeg, hooks, getLang } = window.TT;

const BASES = ['https://iran-market.github.io/data/', 'https://cdn.jsdelivr.net/gh/iran-market/iran-market.github.io@main/data/'];
const hist = new Map();
let popular = null;
let series = [];
let hover = -1;
let loadId = 0;

let cur = 'USD_IRR_FREE';
const symA = bindSeg('pr-sym', v => { cur = v; symB.set(null); load(); });
const symB = bindSeg('pr-gold', v => { cur = v; symA.set(null); load(); });
const sym = { get: () => cur };
const unit = bindSeg('pr-unit', () => { paintHead(); draw(); });
let reveal = 1;
let raf = 0;
function animate() {
  cancelAnimationFrame(raf);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { reveal = 1; draw(); return; }
  const t0 = performance.now();
  const step = now => {
    const p = Math.min(1, (now - t0) / 750);
    reveal = 1 - Math.pow(1 - p, 3);
    draw();
    if (p < 1) raf = requestAnimationFrame(step);
  };
  reveal = 0;
  raf = requestAnimationFrame(step);
}
const range = bindSeg('pr-range', () => { hover = -1; $('pr-tip').hidden = true; animate(); });

async function getJson(path, bust) {
  let err;
  for (const b of BASES) {
    try {
      const r = await fetch(b + path + (bust ? '?t=' + Date.now() : ''), { cache: 'no-cache' });
      if (!r.ok) throw new Error(String(r.status));
      return await r.json();
    } catch (e) { err = e; }
  }
  throw err;
}

const toRial = (v, cur) => (cur === 'IRT' ? v * 10 : v);

function fmt(v) {
  const rial = unit.get() === 'irr';
  const n = rial ? v : v / 10;
  const d = n >= 1000 ? 0 : n >= 10 ? 2 : 4;
  return n.toLocaleString(getLang() === 'fa' ? 'fa-IR' : 'en-US', { maximumFractionDigits: d });
}

function fmtDate(ms, long) {
  const loc = getLang() === 'fa' ? 'fa-IR-u-ca-persian' : 'en-US';
  return new Date(ms).toLocaleDateString(loc, long ? { year: 'numeric', month: 'short', day: 'numeric' } : { month: 'short', day: 'numeric' });
}

function setStat(cls, key) {
  const s = $('pr-stat');
  s.className = 'status t ' + cls;
  s.textContent = key ? t(key) : '';
}

function norm(h) {
  const cur = (h.meta && h.meta.currency) || 'IRT';
  return (h.data || []).map(c => ({ ts: Date.parse(c.t || c.t_tehran), v: toRial(Number(c.close), cur), hi: toRial(Number(c.high), cur), lo: toRial(Number(c.low), cur) }))
    .filter(p => isFinite(p.ts) && isFinite(p.v) && p.v > 0).sort((a, b) => a.ts - b.ts);
}

function liveOf(symbol) {
  if (!popular) return null;
  const list = Array.isArray(popular.data) ? popular.data : [];
  const r = list.find(x => x.symbol === symbol);
  if (!r || !isFinite(Number(r.price))) return null;
  return { v: toRial(Number(r.price), r.currency), hi: toRial(Number(r.high), r.currency), lo: toRial(Number(r.low), r.currency), pct: Number(r.change_pct), ts: Date.parse(r.timestamp), stale: !!r.stale };
}

function paintHead() {
  const live = liveOf(sym.get());
  const last = series[series.length - 1];
  const prev = series[series.length - 2];
  const cur = live || (last ? { v: last.v, hi: last.hi, lo: last.lo, pct: prev ? (last.v / prev.v - 1) * 100 : NaN, ts: last.ts, stale: false } : null);
  const unitName = t(unit.get() === 'irr' ? 'prRial' : 'prToman');
  if (!cur) { $('pr-price').textContent = '…'; $('pr-chg').textContent = ''; ['pr-hi', 'pr-lo', 'pr-upd'].forEach(i => { $(i).hidden = true; }); return; }
  $('pr-price').innerHTML = '<span>' + fmt(cur.v) + '</span> <small>' + unitName + '</small>';
  const c = $('pr-chg');
  if (isFinite(cur.pct)) {
    c.className = 'pr-chg ' + (cur.pct >= 0 ? 'up' : 'down');
    c.innerHTML = '<bdi dir="ltr">' + (cur.pct >= 0 ? '▲ +' : '▼ ') + cur.pct.toFixed(2) + '%</bdi>';
  } else { c.className = 'pr-chg'; c.textContent = ''; }
  const chip = (id, label, val) => { const e = $(id); e.hidden = !val; e.innerHTML = val ? esc(label) + ' <b><bdi>' + esc(val) + '</bdi></b>' : ''; };
  chip('pr-hi', t('prHigh'), isFinite(cur.hi) ? fmt(cur.hi) : '');
  chip('pr-lo', t('prLow'), isFinite(cur.lo) ? fmt(cur.lo) : '');
  chip('pr-upd', t('prUpdated'), isFinite(cur.ts) ? fmtDate(cur.ts, true) + (cur.stale ? ' · ' + t('prStale') : '') : '');
}

function visible() {
  const days = Number(range.get());
  if (!days || !series.length) return series;
  const from = series[series.length - 1].ts - days * 86400000;
  return series.filter(p => p.ts >= from);
}

function colors() {
  const cs = getComputedStyle(document.documentElement);
  return { pink: cs.getPropertyValue('--pink').trim() || '#ff7ab6', blue: cs.getPropertyValue('--blue').trim() || '#5bcefa', muted: cs.getPropertyValue('--muted').trim() || '#cdb8c7' };
}

let geo = null;

function draw() {
  const cvs = $('pr-canvas');
  const box = cvs.parentNode;
  const dpr = window.devicePixelRatio || 1;
  const W = box.clientWidth;
  const H = box.clientHeight;
  if (!W || !H) return;
  cvs.width = Math.round(W * dpr);
  cvs.height = Math.round(H * dpr);
  const c = cvs.getContext('2d');
  c.setTransform(dpr, 0, 0, dpr, 0, 0);
  c.clearRect(0, 0, W, H);
  const pts = visible();
  geo = null;
  if (pts.length < 2) return;
  const col = colors();
  const rial = unit.get() === 'irr';
  const k = rial ? 1 : 0.1;
  let lo = Infinity, hi = -Infinity;
  pts.forEach(p => { lo = Math.min(lo, p.v * k); hi = Math.max(hi, p.v * k); });
  const padv = (hi - lo) * 0.12 || hi * 0.02;
  lo -= padv; hi += padv;
  const L = 8, R = 62, T = 14, B = 26;
  const x0 = L, x1 = W - R, y0 = T, y1 = H - B;
  const tx = i => x0 + (pts[i].ts - pts[0].ts) / (pts[pts.length - 1].ts - pts[0].ts) * (x1 - x0);
  const ty = v => y1 - (v - lo) / (hi - lo) * (y1 - y0);
  c.font = '11px ' + (getComputedStyle(document.body).fontFamily || 'sans-serif');
  c.fillStyle = col.muted;
  c.strokeStyle = 'rgba(255,239,247,0.09)';
  c.lineWidth = 1;
  c.textBaseline = 'middle';
  c.textAlign = 'left';
  for (let i = 0; i <= 4; i++) {
    const v = lo + (hi - lo) * i / 4;
    const y = Math.round(ty(v)) + 0.5;
    c.beginPath(); c.moveTo(x0, y); c.lineTo(x1, y); c.stroke();
    c.fillText(v.toLocaleString(getLang() === 'fa' ? 'fa-IR' : 'en-US', { maximumFractionDigits: v >= 1000 ? 0 : 2 }), x1 + 6, y);
  }
  c.textBaseline = 'alphabetic';
  for (let i = 0; i <= 3; i++) {
    const f = i / 3;
    const ts = pts[0].ts + (pts[pts.length - 1].ts - pts[0].ts) * f;
    c.textAlign = i === 0 ? 'left' : i === 3 ? 'right' : 'center';
    c.fillText(fmtDate(ts, pts[pts.length - 1].ts - pts[0].ts > 300 * 86400000), x0 + (x1 - x0) * f, H - 8);
  }
  c.save();
  c.beginPath();
  c.rect(0, 0, x0 + (x1 - x0) * reveal + 2, H);
  c.clip();
  const g = c.createLinearGradient(0, y0, 0, y1);
  g.addColorStop(0, 'rgba(255,122,182,0.34)');
  g.addColorStop(1, 'rgba(91,206,250,0)');
  c.beginPath();
  pts.forEach((p, i) => { const x = tx(i), y = ty(p.v * k); i ? c.lineTo(x, y) : c.moveTo(x, y); });
  c.lineTo(tx(pts.length - 1), y1); c.lineTo(tx(0), y1); c.closePath();
  c.fillStyle = g; c.fill();
  const lg = c.createLinearGradient(x0, 0, x1, 0);
  lg.addColorStop(0, col.pink); lg.addColorStop(1, col.blue);
  c.beginPath();
  pts.forEach((p, i) => { const x = tx(i), y = ty(p.v * k); i ? c.lineTo(x, y) : c.moveTo(x, y); });
  c.strokeStyle = lg; c.lineWidth = 2.2; c.lineJoin = 'round'; c.stroke();
  c.restore();
  geo = { pts, tx, ty, k, x0, x1, y0, y1 };
  if (hover >= 0 && hover < pts.length && reveal >= 1) {
    const x = tx(hover), y = ty(pts[hover].v * k);
    c.strokeStyle = 'rgba(255,239,247,0.35)'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(Math.round(x) + 0.5, y0); c.lineTo(Math.round(x) + 0.5, y1); c.stroke();
    c.fillStyle = '#fff'; c.beginPath(); c.arc(x, y, 4.5, 0, 7); c.fill();
    c.strokeStyle = col.pink; c.lineWidth = 2; c.stroke();
  }
}

function onMove(e) {
  if (!geo) return;
  const r = $('pr-canvas').getBoundingClientRect();
  const x = e.clientX - r.left;
  const { pts, tx } = geo;
  let best = 0, bd = Infinity;
  for (let i = 0; i < pts.length; i++) { const d = Math.abs(tx(i) - x); if (d < bd) { bd = d; best = i; } }
  hover = best;
  const tip = $('pr-tip');
  tip.hidden = false;
  tip.textContent = fmtDate(pts[best].ts, true) + '  ' + fmt(pts[best].v);
  const w = tip.offsetWidth;
  tip.style.left = Math.max(6, Math.min(r.width - w - 6, tx(best) - w / 2)) + 'px';
  draw();
}

function onLeave() { hover = -1; $('pr-tip').hidden = true; draw(); }

const cv = $('pr-canvas');
cv.addEventListener('pointermove', onMove);
cv.addEventListener('pointerdown', onMove);
cv.addEventListener('pointerleave', onLeave);
cv.addEventListener('pointercancel', onLeave);

async function load(bust) {
  const id = ++loadId;
  const s = sym.get();
  const view = $('v-prices');
  if (!bust) { hover = -1; $('pr-tip').hidden = true; setStat('idle', ''); view.classList.add('loading'); series = []; paintHead(); draw(); }
  try {
    const needPop = bust || !popular;
    const [pop, h] = await Promise.all([
      needPop ? getJson('popular.json', bust).catch(() => popular) : popular,
      !bust && hist.has(s) ? hist.get(s) : getJson('history/' + s + '.json', bust)
    ]);
    if (id !== loadId) return;
    popular = pop;
    hist.set(s, h);
    series = norm(h);
    if (series.length < 2) throw new Error('empty');
    view.classList.remove('loading');
    setStat('ok', '');
    $('pr-stat').className = 'status t';
    $('pr-stat').textContent = '';
    paintHead();
    if (bust) draw(); else animate();
  } catch (e) {
    if (id !== loadId) return;
    view.classList.remove('loading');
    series = [];
    paintHead();
    draw();
    if (!bust || !series.length) setStat('no', 'prFail');
  }
}

const REFRESH = 5 * 60 * 1000;
let lastLoad = 0;
const origLoad = load;
async function refresh() { lastLoad = Date.now(); return origLoad(true); }
setInterval(() => { if (!document.hidden && !$('v-prices').hidden) refresh(); }, REFRESH);
document.addEventListener('visibilitychange', () => { if (!document.hidden && !$('v-prices').hidden && Date.now() - lastLoad > 60000) refresh(); });
hooks.enter.push(id => { if (id === 'prices') { lastLoad = Date.now(); if (!series.length) load(); else { paintHead(); draw(); refresh(); } } });
hooks.lang.push(() => { paintHead(); draw(); });
window.addEventListener('resize', () => { if (!$('v-prices').hidden) draw(); });
})();
window.TT.init();
