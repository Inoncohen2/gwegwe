import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'שעון אנלוגי מינימליסטי',
    price: 550.00,
    category: 'אביזרים',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    description: 'פריט על-זמני הכולל לוח נקי, רצועת עור איכותית ומנגנון מדויק. מושלם לאירועים רשמיים ויומיומיים כאחד.'
  },
  {
    id: 2,
    name: 'אוזניות מבטלות רעשים',
    price: 1100.00,
    category: 'אודיו',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    description: 'חוויית סאונד טהורה עם ביטול רעשים מוביל. חיי סוללה של 30 שעות וכריות אוזניים רכות לנוחות לאורך כל היום.'
  },
  {
    id: 3,
    name: 'כיסא משרדי ארגונומי',
    price: 1650.00,
    category: 'ריהוט',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
    description: 'תוכנן לתמיכה ויציבה אופטימלית. כולל תמיכה לגב התחתון, גב רשת נושם וגלגלים שקטים.'
  },
  {
    id: 4,
    name: 'מקלדת מכנית',
    price: 450.00,
    category: 'אלקטרוניקה',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=800',
    description: 'מתגים טקטיליים ותאורת RGB ניתנת להתאמה אישית. בנויה עם מסגרת אלומיניום לעמידות מירבית.'
  },
  {
    id: 5,
    name: 'תיק עור פרימיום',
    price: 680.00,
    category: 'אופנה',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
    description: 'עבודת יד מעור מלא. חלל פנימי מרווח עם תא ייעודי למחשב נייד וכיסים לארגון חפצים.'
  },
  {
    id: 6,
    name: 'רמקול חכם לבית',
    price: 320.00,
    category: 'אלקטרוניקה',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=800',
    description: 'מלא את החדר בצליל עשיר ב-360 מעלות. תומך בשליטה קולית ותואם לכל שירותי הסטרימינג הגדולים.'
  }
];