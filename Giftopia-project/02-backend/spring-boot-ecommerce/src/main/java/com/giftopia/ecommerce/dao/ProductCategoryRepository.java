package com.giftopia.ecommerce.dao;
import com.giftopia.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//productCategory is JSON entry,product_category is /product-category
@RepositoryRestResource(collectionResourceRel = "productCategory" ,path="product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
}
