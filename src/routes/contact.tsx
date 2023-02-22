import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import classnames from "clsx";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<any>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setState({
    ...state,
    [e.target.name]: e.target.value || ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    setIsSuccess(true);
  }


  return (
    <Layout>
      <Article>
        <ArticleContent title="Контакты">
          <iframe src="https://forms.yandex.ru/cloud/63f614e0c417f3030c2c0f3b/?iframe=1" frameBorder="0"
                  name="ya-form-63f614e0c417f3030c2c0f3b" width="650"></iframe>

          {/*<form*/}
          {/*  onSubmit={handleSubmit}*/}
          {/*  className={classnames('newsletter-form is-revealing')}*/}
          {/*>*/}
          {/*  */}
          {/*  */}
          {/*  <div className="mb-4">*/}
          {/*    <label className="hidden" htmlFor="name" aria-hidden="true">*/}
          {/*      Имя*/}
          {/*    </label>*/}
          {/*    <input*/}
          {/*      required*/}
          {/*      placeholder="Ваше имя"*/}
          {/*      id="name"*/}
          {/*      name="name"*/}
          {/*      type="text"*/}
          {/*      value={state?.name || ''}*/}
          {/*      onChange={handleChange}*/}
          {/*      autoComplete="off"*/}
          {/*      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="mb-4">*/}
          {/*    <label className="hidden" htmlFor="name" aria-hidden="true">*/}
          {/*      Email*/}
          {/*    </label>*/}
          {/*    <input*/}
          {/*      required*/}
          {/*      placeholder="Ваша электронная почта"*/}
          {/*      id="email"*/}
          {/*      name="email"*/}
          {/*      type="email"*/}
          {/*      value={state?.email || ''}*/}
          {/*      onChange={handleChange}*/}
          {/*      autoComplete="off"*/}
          {/*      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="mb-4">*/}
          {/*    <label className="hidden" htmlFor="name" aria-hidden="true">*/}
          {/*      Номер телефона*/}
          {/*    </label>*/}
          {/*    <input*/}
          {/*      required*/}
          {/*      placeholder="+7 (999) 999 999"*/}
          {/*      id="phone"*/}
          {/*      name="phone"*/}
          {/*      type="tel"*/}
          {/*      pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"*/}
          {/*      value={state?.phone || ''}*/}
          {/*      onChange={handleChange}*/}
          {/*      autoComplete="off"*/}
          {/*      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="mb-4">*/}
          {/*    <label className="hidden" htmlFor="name" aria-hidden="true">*/}
          {/*      Организация*/}
          {/*    </label>*/}
          {/*    <input*/}
          {/*      required*/}
          {/*      placeholder="Организация"*/}
          {/*      id="organization"*/}
          {/*      name="organization"*/}
          {/*      type="text"*/}
          {/*      value={state?.organization || ''}*/}
          {/*      onChange={handleChange}*/}
          {/*      autoComplete="off"*/}
          {/*      className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"*/}
          {/*    />*/}
          {/*  </div>*/}

          {/*  <div className="control">*/}
          {/*    <button*/}
          {/*      className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"*/}
          {/*      type="submit"*/}
          {/*    >*/}
          {/*      Запросить доступ*/}
          {/*    </button>*/}
          {/*  </div>*/}

          {/*  {isSuccess && (*/}
          {/*    <div className="mt-2 text-xs italic text-green-500">*/}
          {/*      Запрос успешно отправлен*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</form>*/}
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="500"
            src="../assets/contacts1_grey.jpeg"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
