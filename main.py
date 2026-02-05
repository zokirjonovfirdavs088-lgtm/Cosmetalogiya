import telebot
from telebot.types import (
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    ReplyKeyboardMarkup,
    KeyboardButton
)

TOKEN = "8459107764:AAGhzLfZKbjnuUkS58A76xTBO6EbpyGn2-g"
OWNER_ID = 6411533078  

bot = telebot.TeleBot(TOKEN)


user_data = {}


days = {
    "mon": "Dushanba",
    "tue": "Seshanba",
    "wed": "Chorshanba",
    "thu": "Payshanba",
    "fri": "Juma"
}


times = [f"{h}:00" for h in range(9, 18)]


@bot.message_handler(commands=['start'])
def start(message):
    keyboard = InlineKeyboardMarkup(row_width=2)
    for key, day in days.items():
        keyboard.add(
            InlineKeyboardButton(text=day, callback_data=f"day_{key}")
        )

    bot.send_message(
        message.chat.id,
        "👋 Assalomu alaykum!\n\n"
        "📅 Iltimos, haftaning kunini tanlang:",
        reply_markup=keyboard
    )


@bot.callback_query_handler(func=lambda call: call.data.startswith("day_"))
def choose_day(call):
    day_key = call.data.split("_")[1]
    day_name = days[day_key]

    user_data[call.from_user.id] = {"day": day_name}

    keyboard = InlineKeyboardMarkup(row_width=3)
    for t in times:
        keyboard.add(
            InlineKeyboardButton(text=t, callback_data=f"time_{t}")
        )

    bot.edit_message_text(
        chat_id=call.message.chat.id,
        message_id=call.message.message_id,
        text=f"📅 Tanlangan kun: *{day_name}*\n\n⏰ Vaqtni tanlang:",
        reply_markup=keyboard,
        parse_mode="Markdown"
    )


@bot.callback_query_handler(func=lambda call: call.data.startswith("time_"))
def choose_time(call):
    time = call.data.split("_")[1]
    user_id = call.from_user.id

    user_data[user_id]["time"] = time

    
    phone_keyboard = ReplyKeyboardMarkup(
        resize_keyboard=True,
        one_time_keyboard=True
    )
    phone_keyboard.add(
        KeyboardButton("📞 Telefon raqamni yuborish", request_contact=True)
    )

    bot.send_message(
        call.message.chat.id,
        f"⏰ Tanlangan vaqt: *{time}*\n\n"
        "📞 Iltimos, telefon raqamingizni yuboring:",
        reply_markup=phone_keyboard,
        parse_mode="Markdown"
    )


@bot.message_handler(content_types=['contact'])
def get_contact(message):
    user = message.from_user
    phone = message.contact.phone_number

    data = user_data.get(user.id, {})
    day = data.get("day")
    time = data.get("time")

    owner_text = (
        "📥 *Yangi buyurtma!*\n\n"
        f"👤 Ism: {user.first_name}\n"
        f"🆔 ID: {user.id}\n"
        f"📅 Kun: {day}\n"
        f"⏰ Vaqt: {time}\n"
        f"📞 Telefon: {phone}"
    )

    
    bot.send_message(OWNER_ID, owner_text, parse_mode="Markdown")

    bot.send_message(
        message.chat.id,
        "✅ Rahmat!\n\n"
        "📨 Ma'lumotlar qabul qilindi va bot egasiga yuborildi.",
        reply_markup=telebot.types.ReplyKeyboardRemove()
    )

    user_data.pop(user.id, None)


print("🤖 Bot ishga tushdi...")
bot.infinity_polling()
