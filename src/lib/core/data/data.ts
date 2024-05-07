import type { ItemMenu, ItemOutstanding, ItemProduct, Partner, User } from ".";


export const Menu: ItemMenu[] = [
    { title: 'Outstanding', link: 'outstanding' },
    { title: 'Featured Products', link: 'featured-products' },
    { title: 'Partners', link: 'partners' },
    { title: 'Our Team', link: 'team' },
];

export const Outstanding: ItemOutstanding[] = [
    {
        total: 200,
        unit: 'M+',
        title: 'Downloads',
        image: 'src/lib/images/total_ic_download.png',
    },
    { total: 25, unit: 'M+', title: 'MAU', image: 'src/lib/images/ic_MAU.png' },
    {
        total: 100,
        unit: '+',
        title: 'Total Apps',
        image: 'src/lib/images/ic_total app.png',
    },
];

export const Products: ItemProduct[] = [
    {
        title: 'PDF Reader',
        total: '10.000.000+',
        image: 'src/lib/images/product_1.png',
        thumbnail: 'src/lib/images/thum_product_1.png',
        link: 'https://play.google.com/store/apps/details?id=com.pdfreader.pdfeditor.pdfreadeforandroid.pdfeditorforandroidfree'
    },
    {
        title: 'PDF Scanner',
        total: '5.000.000+',
        image: 'src/lib/images/product_2.png',
        thumbnail: 'src/lib/images/thum_product_2.png',
        link: 'https://play.google.com/store/apps/details?id=com.scannerapp.pdfscanner.documentscaner.docscannerappforandroid',
    },
    {
        title: 'All Document',
        total: '5.000.000+',
        image: 'src/lib/images/product_3.png',
        thumbnail: 'src/lib/images/thum_product_3.png',
        link: 'https://play.google.com/store/apps/details?id=com.officesuite.fileopener.fileviewer.all.document.reader.word.excel.pptx.pdf',
    },
    {
        title: 'Compass',
        total: '5.000.000+',
        image: 'src/lib/images/product_4.png',
        thumbnail: 'src/lib/images/thum_product_4.png',
        link: 'https://play.google.com/store/apps/details?id=com.compass.compassapp.compassfree',
    },
    {
        title: 'Flash Alert',
        total: '5.000.000+',
        image: 'src/lib/images/product_5.png',
        thumbnail: 'src/lib/images/thum_product_5.png',
        link: 'https://play.google.com/store/apps/details?id=com.flashlight.torch.light.app.mobileflashlight.flashlightapp.ledflashlight',
    },
    {
        title: 'Layout',
        total: '5.000.000+',
        image: 'src/lib/images/product_6.png',
        thumbnail: 'src/lib/images/thum_product_6.png',
        link: 'https://play.google.com/store/apps/details?id=com.volio.layout.photocollage.collagemaker',
    },
    {
        title: 'Color Phone',
        total: '1.000.000+',
        image: 'src/lib/images/product_7.png',
        thumbnail: 'src/lib/images/thum_product_7.png',
        link: 'https://play.google.com/store/apps/details?id=com.callscreen.colorphone.calltheme.callscreener.callerscreenapp'
    },
    {
        title: '3D Wallpaper',
        total: '1.000.000+',
        image: 'src/lib/images/product_8.png',
        thumbnail: 'src/lib/images/thum_product_8.png',
        link: 'https://play.google.com/store/apps/details?id=com.livewallpaper3D.cool.wallpapers.free.wallpaper4K.parallax',
    },
];

export const Partners: Partner[] = [
    { title: 'Admob', image: 'src/lib/images/icon_partners_1.png' },
    { title: 'App Store', image: 'src/lib/images/icon_partners_5.png' },
    { title: 'AppLovin', image: 'src/lib/images/icon_partners_8.png' },
    { title: 'AppsFlyer', image: 'src/lib/images/icon_partners_9.png' },
    { title: 'Google Ads', image: 'src/lib/images/icon_partners_3.png' },
    { title: 'Google Play', image: 'src/lib/images/icon_partners_4.png' },
    { title: 'Meta Audience Network', image: 'src/lib/images/icon_partners_2.png',
    },
    { title: 'Mintegral', image: 'src/lib/images/icon_partners_7.png' },

    { title: 'Tiktok', image: 'src/lib/images/icon_partners_10.png' },
    { title: 'Unity', image: 'src/lib/images/icon_partners_6.png' },
];

export const Users: User[] = [
    { name: 'VuongLT', role: 'CEO', image: 'src/lib/images/member_1.png' },
    {
        name: 'VinhNT',
        role: 'Tech Leader',
        image: 'src/lib/images/member_2.png',
    },
    {
        name: 'HuyenVT',
        role: 'Marketing Leader',
        image: 'src/lib/images/member_3.png',
    },
    {
        name: 'ThoPA',
        role: 'Design Leader',
        image: 'src/lib/images/member_4.png',
    },
    { name: 'NamDP', role: 'Developer', image: 'src/lib/images/member_5.png' },
    { name: 'HienDX', role: 'Developer', image: 'src/lib/images/member_6.png' },
    { name: 'NhiemVH', role: 'Developer', image: 'src/lib/images/member_7.png' },
    { name: 'DuyLX', role: 'Designer', image: 'src/lib/images/member_8.png' },
];
