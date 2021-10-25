import React from "react";
import { Field, Form } from "react-final-form";
import "./OrderForm.scss";

const OrderForm = (props) => {
  debugger;
  const onSubmit = async (values) => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  const required = (value) => (value ? undefined : "Нужно заполнить");
  const mustBeNumber = (value) =>
    isNaN(value) ? "Используйте цифры" : undefined;
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <div className="form">
      <h2>Корзина</h2>
      <div className="form__inner">
        <Form onSubmit={onSubmit}>
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className="form__data">
              Дата:
              <Field name="orderDate" validate={required}>
                {({ input, meta }) => (
                  <div className="form__data--wrapper">
                    {meta.error && meta.touched && (
                      <span className="form__data--error">{meta.error}</span>
                    )}
                    <input
                      {...input}
                      className={
                        meta.error && meta.touched
                          ? "form__data--input active"
                          : "form__data--input"
                      }
                      type="datetime-local"
                      placeholder="Введите ваш адрес"
                    />
                  </div>
                )}
              </Field>
              Номер телефона:
              <Field
                name="phoneNumber"
                validate={composeValidators(required, mustBeNumber)}
              >
                {({ input, meta }) => (
                  <div className="form__data--wrapper">
                    {meta.error && meta.touched && (
                      <span className="form__data--error">{meta.error}</span>
                    )}
                    <input
                      {...input}
                      className={
                        meta.error && meta.touched
                          ? "form__data--input active"
                          : "form__data--input"
                      }
                      type="text"
                      placeholder="Введите номер телефона"
                    />
                  </div>
                )}
              </Field>
              Адрес:
              <Field name="address" validate={required}>
                {({ input, meta }) => (
                  <div className="form__data--wrapper">
                    {meta.error && meta.touched && (
                      <span className="form__data--error">{meta.error}</span>
                    )}
                    <input
                      {...input}
                      className={
                        meta.error && meta.touched
                          ? "form__data--input active"
                          : "form__data--input"
                      }
                      type="text"
                      placeholder="Введите ваш адрес"
                    />
                  </div>
                )}
              </Field>
              Электронный адрес:
              <Field name="email">
                {({ input, meta }) => (
                  <input
                    {...input}
                    type="email"
                    className="form__data--input"
                    placeholder="Введите ваш адрес"
                  />
                )}
              </Field>
              Способ оплаты:
              <div className="form__data--radio--wrapper">
                <Field name="payment" validate={required}>
                  {({ input, meta }) => (
                    <div className="form__data--radio">
                      {meta.error && meta.touched && (
                      <span className="form__data--radio--error">{meta.error}</span>
                    )}
                      <input {...input} type="radio" value="cash" id="cb1" />
                      <label htmlFor="cb1">Наличными</label>
                    </div>
                  )}
                </Field>
                <Field name="payment" validate={required}>
                  {({ input, meta }) => (
                    <div className="form__data--radio">
                      <input {...input} type="radio" value="card" id="cb2" />
                      <label htmlFor="cb2">Картой</label>
                    </div>
                  )}
                </Field>
              </div>
              Дополнительная информация:
              <Field
                className="form__data--textarea"
                component="textarea"
                type="text"
                name="textArea"
                placeholder="Место для дополнительной информации"
              />
              <div className="form__price">
                <button>Заказать</button>
                <p>Цена: {props.totalPrice}</p>
              </div>
            </form>
          )}
        </Form>
        <div className="form__line"></div>
        <div className="form__order">
          {props.order.map((i) => {
            return (
              <div className="form__order--item">
                <img src={i.itemInfo.itemImg} alt="картинка товара" />
                <h4>"{i.itemInfo.itemName}"</h4>

                <p>({i.itemQnt}) шт.</p>
                <p>{i.calcPrice} руб.</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
