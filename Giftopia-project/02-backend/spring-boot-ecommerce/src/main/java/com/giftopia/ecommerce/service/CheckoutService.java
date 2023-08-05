package com.giftopia.ecommerce.service;

import com.giftopia.ecommerce.dto.PaymentInfo;
import com.giftopia.ecommerce.dto.Purchase;
import com.giftopia.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
