package com.giftopia.ecommerce.dto;

import com.giftopia.ecommerce.entity.Address;
import com.giftopia.ecommerce.entity.Customer;
import com.giftopia.ecommerce.entity.Order;
import com.giftopia.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
