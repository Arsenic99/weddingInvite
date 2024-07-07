import secondBackground from '../img/secondBackground.png'

export const InformationPage = () => {
    return (
        <div className={`h-[100vh] bg-contain py-10 px-5 md:p-20`} style={{ backgroundImage: `url(${secondBackground})` }}>
            <div className='max-w-[490px] w-full mx-auto text-center py-5 md:p-[30px] rounded-lg' style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                <p className={`text-[19.6984pt] mb-3 md:mb-5`}>Құрметті қонақ!</p>
                <p className={`text-[11.9903pt] mb-5 md:mb-8`}>Сіз(дер)ді үйлену тойымызға арналған салтанатты дастарханымыздың қадірлі қонағы болуға шақырамыз!</p>
                <p className={`text-[14.5597pt] mb-5 md:mb-8`}>Арсен & Асем</p>
                <p className={`text-[11.9903pt] mb-5`}>2024 ЖЫЛ, 14 ҚЫРКҮЙЕК
                    <br />
                СЕНБІ САҒАТ 19:00 
                </p>
                <p className={`text-[14.5597pt] mb-5 md:mb-8`}>Той иелері</p>
                <p className={`text-[11.9903pt] mb-10`}>Мекен-жайымыз: Орал қаласы, "Байтерек" банкет залы
                    <br/>
                Трасса Уральск-Желаево, 3 ст
                </p>
                <a href='https://go.2gis.com/35qrw' className='border text-white py-2 px-4 rounded-md'  style={{ backgroundColor: 'rgb(97, 139, 95)' }}>Картадан көрсету</a>
            </div>
        </div>
    )
}