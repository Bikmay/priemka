import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form class="registration" action="" method="post" name="registration">
        <ul>
            <li>
                <font size="6"><h1>Регистрация</h1></font>
            </li>
            <li class="substrings"><label>Ф.И.О</label></li>
			<li class="colon1">
                <input type="text" name="Name" value="name" placeholder="Иванов Иван Иванович" required/>
            </li>
            <li class="substrings"><label>Форма обучения</label></li>
			<li class="colon1">
				<select name="Forms" required>
				<option selected disabled></option>
				<option value="form1">Бюджетная</option>
				<option value="form2">Контрактная</option>
				<option value="form3">Целевой набор</option>
			   </select>		
            </li>
            <li class="substrings">Баллы по ЕГЭ за предметы:</li>
			<li class="colon2">
				<label>Русский язык:</label>
				<input type="text" name="RusLan" required/>
			</li>
			<li class="colon2">
				<label>Математика:</label>
				<input type="text" name="Maths" required/>
			</li>
			<li class="colon2">
				<label>Третий предмет:</label>
				<input type="text" name="ThirdSubject" required/>
			</li>
			<li class="substrings">Приоритеты поступления</li>
			<li class="colon3">
                 <label>Первый приоритет</label>
                 <select name="priority1" required>
				<option selected disabled></option>
				<option value="02.03.03">02.03.03 - Математическое обеспечение и администрирование информационных систем</option>
				<option value="09.03.01">09.03.01 - Информатика и вычислительная техника</option>
				<option value="09.03.02">09.03.02 - Информационные системы и технологии</option>
				<option value="09.03.03">09.03.03 - Прикладная информатика</option>
				<option value="09.03.04">09.03.04 - Программная инженерия</option>
				<option value="10.03.01">10.03.01 - Информационная безопасность</option>
				<option value="11.03.01">11.03.01 - Радиотехника</option>
				<option value="11.03.02">11.03.02 - Инфокоммуникационные технологии и системы связи</option>
				<option value="12.03.03">12.03.03 - Фотоника и оптоинформатика</option>
				<option value="27.03.04">27.03.04 - Управление в технических системах</option>
				<option value="27.03.05">27.03.05 - Инноватика</option>
				<option value="38.03.05">38.03.05 - Бизнес-информатика</option>
				<option value="42.03.01">42.03.01 - Реклама и связи с общественностью</option>
				<option value="11.05.01">11.05.01 - Радиоэлектронные системы и комплексы</option>
				<option value="10.05.02">10.05.02 - Информационная безопасность телекоммуникационных систем</option>
			   </select>
			</li>
			<li class="colon3">
				 <label>Второй приоритет</label>
                 <select name="priority2" required>
				 <option selected disabled></option>
				<option value="02.03.03">02.03.03 - Математическое обеспечение и администрирование информационных систем</option>
				<option value="09.03.01">09.03.01 - Информатика и вычислительная техника</option>
				<option value="09.03.02">09.03.02 - Информационные системы и технологии</option>
				<option value="09.03.03">09.03.03 - Прикладная информатика</option>
				<option value="09.03.04">09.03.04 - Программная инженерия</option>
				<option value="10.03.01">10.03.01 - Информационная безопасность</option>
				<option value="11.03.01">11.03.01 - Радиотехника</option>
				<option value="11.03.02">11.03.02 - Инфокоммуникационные технологии и системы связи</option>
				<option value="12.03.03">12.03.03 - Фотоника и оптоинформатика</option>
				<option value="27.03.04">27.03.04 - Управление в технических системах</option>
				<option value="27.03.05">27.03.05 - Инноватика</option>
				<option value="38.03.05">38.03.05 - Бизнес-информатика</option>
				<option value="42.03.01">42.03.01 - Реклама и связи с общественностью</option>
				<option value="11.05.01">11.05.01 - Радиоэлектронные системы и комплексы</option>
				<option value="10.05.02">10.05.02 - Информационная безопасность телекоммуникационных систем</option>
			    </select>	
			</li>
			<li class="colon3">
				 <label for="priority3">Третий приоритет:</label>
                 <select name="priority3" required>
				 <option value="02.03.03">02.03.03 - Математическое обеспечение и администрирование информационных систем</option>
				<option value="09.03.01">09.03.01 - Информатика и вычислительная техника</option>
				<option value="09.03.02">09.03.02 - Информационные системы и технологии</option>
				<option value="09.03.03">09.03.03 - Прикладная информатика</option>
				<option value="09.03.04">09.03.04 - Программная инженерия</option>
				<option value="10.03.01">10.03.01 - Информационная безопасность</option>
				<option value="11.03.01">11.03.01 - Радиотехника</option>
				<option value="11.03.02">11.03.02 - Инфокоммуникационные технологии и системы связи</option>
				<option value="12.03.03">12.03.03 - Фотоника и оптоинформатика</option>
				<option value="27.03.04">27.03.04 - Управление в технических системах</option>
				<option value="27.03.05">27.03.05 - Инноватика</option>
				<option value="38.03.05">38.03.05 - Бизнес-информатика</option>
				<option value="42.03.01">42.03.01 - Реклама и связи с общественностью</option>
				<option value="11.05.01">11.05.01 - Радиоэлектронные системы и комплексы</option>
				<option value="10.05.02">10.05.02 - Информационная безопасность телекоммуникационных систем</option>
			    </select>
            </li>
			<li  class="colon4">
				<input type="checkbox" name="hostel"/>
				<label>нуждаюсь в общежитии</label>
			</li>
			<li>
				<input class="sumbit" type="submit" value="Зарегистрироваться"/>
			</li>
		</ul>
		</form>
    </div>
  );
}

export default App;
