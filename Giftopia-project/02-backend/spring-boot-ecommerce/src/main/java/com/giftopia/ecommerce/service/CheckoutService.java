package com.giftopia.ecommerce.service;

import com.giftopia.ecommerce.dto.Purchase;
import com.giftopia.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
